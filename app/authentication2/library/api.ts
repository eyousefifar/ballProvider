import {auth, userProfile, baseUrl, timeClass} from '../../ball-library';
import {SportSitesDataRes} from "../../chnageAccount/library/types";

interface IVerifyResponse {
    state: 'success' | 'failed',
    message: string
}

export const loginCustomerSms = async (phone: string): Promise<IVerifyResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/auth/login/provider/with-phone/request`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding' :'gzip,deflate',
            },
            body: JSON.stringify({
                phone: phone,
            }),
        });
        let responseJson = await response.json();

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    message: 'Sms has been sent successfully'
                };
            case 404:
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            default:{
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                }
            }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای عدم اتصال به اینترنت'
        }
    }
};

export const loginCustomer = async (phone: string, key: string): Promise<IVerifyResponse> => {

    let body = JSON.stringify('');

    if (userProfile.hasPushID) {
        // console.warn('Login PushID : ',userProfile.pushID)
        body = JSON.stringify({
            phone: phone,
            deviceToken: userProfile.pushID,
            key: key
        })
    } else {
        body = JSON.stringify({
            phone: phone,
            key: key
        })
    }

    // console.warn('body : ',body);


    try {
        let response = await fetch(`${baseUrl}/api/auth/login/with-phone/callback`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding' :'gzip,deflate',
            },
            body: body,
        });
        let responseJson = await response.json();

        console.warn('Confirm Response : ', responseJson);

        switch (response.status) {
            case 200:
                await auth.setToken(responseJson.token.accessToken,responseJson.token.refreshToken);
                // request user profile & save user profile
                await getUserInfo(responseJson.token.accessToken);

                return {
                    state: 'success',
                    message: 'You Logged In Successfully'
                };
            case 400:
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: "failed",
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای عدم اتصال به اینترنت'
        }
    }
};

export const getUserInfo = async (token: string): Promise<IVerifyResponse> => {
    try {
        let response = await fetch(`${baseUrl}/api/users`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                'Accept-Encoding' :'gzip,deflate',
            },
        });
        let responseJson = await response.json();

        switch (response.status) {
            case 200:
                let userName = responseJson.name;
                let phone = responseJson.phone;
                let imageProfileUrl = responseJson.profilePicUrl;

                await saveUserProfile(imageProfileUrl, userName, phone);
                // Get Time from server
                await timeClass.getTimeAndDate();

                return {
                    state: 'success',
                    message: 'You Logged In Successfully'
                };
            case 400:
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: "failed",
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message:  'خطای عدم اتصال به اینترنت'
        }
    }
};

export const saveUserProfile = async (imageUrl: string | null, userName: string, phoneNumber: string) => {
     userProfile.setAllProfile(imageUrl, userName, phoneNumber);

     userProfile.setImageProfileUrl(imageUrl);
     userProfile.setUserName(userName);
     userProfile.setPhoneNumber(phoneNumber);
};

export const getSportSitesID = async (token:string): Promise<SportSitesDataRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/users/providers/sportSites`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding' :'gzip,deflate',
                'Authorization': `Bearer ${token}`,
            },
        });
        let responseJson = await response.json();

        // console.warn('SportSitesIds Response : ',responseJson);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    message: 'با موفقیت دریافت شد',
                    sportSitesData:responseJson
                };
            case 400:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته',
                    sportSitesData:[]
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید',
                    sportSitesData:[]
                };
            default:
                return {
                    state: "failed",
                    message: 'خطای ناشناخته لطفا دوباره امتحان کنید',
                    sportSitesData:[]
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            sportSitesData: [],
            message:'خطای اتصال به اینترنت'
        }
    }
};
