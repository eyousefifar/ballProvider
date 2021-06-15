import {baseUrl} from "../network";
import {SportSitesDataRes, DeviceIdRes, RefreshTokenRes} from "./types";
import {auth} from "../index";


export const sendPushID = async (pushID:string): Promise<DeviceIdRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/users/devices`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding' :'gzip,deflate',
            },
            body: JSON.stringify({
                deviceToken:pushID,
                deviceInfo: {},
            }),
        });
        let responseJson = await response.json();

        console.warn('PushID Response : ', responseJson);

        switch (response.status) {
            case 201:
                return {
                    state: 'success',
                    message: 'Send successfully'
                };
            case 409:
                return {
                    state: 'failed',
                    message: 'شناسه باید یکتا باشد چنین شناسه ای از قبل وجود دارد'
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا امتحان کنید'
                };
            default:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته'
                }
        }


    } catch (e) {
        return {
            state: 'failed',
            message: e.toString()
        }
    }
};

export const getSportSitesId = async (token:string): Promise<SportSitesDataRes> => {
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



        console.warn('SportSitesIds Response : ',responseJson);

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

export const refreshToken = async (refreshToken: string, phone: string): Promise<RefreshTokenRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/auth/accessToken/provider`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
            },
            body: JSON.stringify({
                refreshToken: refreshToken,
                phone: phone,
            }),
        });
        let responseJson = await response.json();

        switch (response.status) {
            case 200:
                await auth.setToken(responseJson.accessToken,auth.getRefreshToken());
                return {
                    state: 'success',
                    message: 'Token refreshed successfully',
                };
            case 401:
                return {
                    state: 'failed',
                    message: 'لطفا از حساب کاربری خود خارج شده و دوباره وارد شوید',
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'لطفا بعدا دوباره امتحان کنید',
                };
            default:
                return {
                    state: "failed",
                    message: 'لطفا از حساب کاربری خود خارج شده و دوباره وارد شوید',
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای عدم اتصال به اینترنت',
        }
    }
};
