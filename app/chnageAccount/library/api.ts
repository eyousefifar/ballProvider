import {baseUrl} from "../../ball-library/network";
import {SportSitesDataRes} from "./types";


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



