import {baseUrl} from "../../ball-library/network";
import {DrawerNotificationsRes, DrawerReservesRes} from "./types";
import qs from "qs";

interface LogoutRes {
    state: 'success' | 'failed',
    message: string
}

export const logoutServer = async (token: string): Promise<LogoutRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/auth/logout`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `${token}`,
                'Accept-Encoding' :'gzip,deflate',
            },
        });
        // let responseJson  = await response.json();

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    message: 'از حساب خود خارج شدید'
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید'
                };
            default:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای اتصال به اینترنت',
        }
    }
};

export const getLastReserves = async (token: string): Promise<DrawerReservesRes> => {
    // TODO => Add odata get last items

    let filterQuery = qs.stringify({
        odataStr: `$orderBy=createdAt desc`
    });

    let Odata = 'odataStr=%24orderby%3DcreatedAt%20desc';


    try {
        let response = await fetch(`${baseUrl}/api/users/customers/reserveItemCards?pageNumber=1&pageSize=3&${Odata}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept-Encoding' :'gzip,deflate',
            },
        });
        let responseJson = await response.json();

        // console.warn('ReservationList Response : ', responseJson);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    reserves: responseJson.reserveItemCards,
                    message: 'رزرو های اخیر'
                };
            case 500:
                return {
                    state: 'failed',
                    reserves: [],
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    reserves: [],
                    message: 'خطای ناشناخته'
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            reserves: [],
            message: 'خطای اتصال به اینترنت'
        }
    }
};

export const getLastNotifications = async (token: string): Promise<DrawerNotificationsRes> => {

    let Odata = 'odataStr=%24orderby%3DcreatedAt%20desc';

    try {
        let response = await fetch(`${baseUrl}/api/users/notifications?pageNumber=1&pageSize=3&${Odata}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept-Encoding' :'gzip,deflate',
            },
        });
        let responseJson = await response.json();

        // console.warn('Notification Response : ', responseJson);

        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    message: 'صفحه پیام ها',
                    notifications: responseJson
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره امتحان کنید',
                    notifications: [],
                };
            default:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته',
                    notifications: [],
                }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            notifications: [],
            message: 'خطای اتصال به اینترنت',
        }
    }

};
