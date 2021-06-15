import {baseUrl} from "../../ball-library/network";
import {ChangeStateRes, Res, VerifyRes} from "./types";


// TODO : add multi use ticket

export const checkTicketByCode = async (token: string, code: string): Promise<VerifyRes> => {

    try {
        let response = await fetch(`${baseUrl}/api/sportSites/reserves/items/code/${code}/check`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
                'Authorization': `Bearer ${token}`,
            },
        });

        const responseJson: Res = await response.json();

        console.warn('Code Res : ', responseJson);

        switch (response.status) {
            case 200:

                if (responseJson.success){
                    return {
                        state: "success",
                        message: responseJson.message,
                        type: 'confirmed',
                        ticketInfo:responseJson.reserveItemCard
                    }
                }else if (!responseJson.success && !responseJson.acceptStatus && responseJson.acceptStatus != null){
                    return {
                        state: "success",
                        message: responseJson.message,
                        type: 'rejected',
                        ticketInfo:responseJson.reserveItemCard
                    }
                }
                else {
                    return {
                        state: "success",
                        message: responseJson.message,
                        type: 'expired',
                        ticketInfo:responseJson.reserveItemCard
                    };
                }

            case 400:
                return {
                    state: 'success',
                    message: responseJson.errs,
                    type:'notValid',
                    ticketInfo: null
                };

            //    TODO : Change this one later
            case 401:
                return {
                    state: 'success',
                    message: 'چنین آیتم رزروی ثبت نشده است',
                    type : 'notValid',
                    ticketInfo:null
                };

            case 404:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته',
                    type : 'unknown',
                    ticketInfo: null
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید',
                    type:'unknown',
                    ticketInfo: null
                };
            default: {
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید',
                    type:'unknown',
                    ticketInfo: null
                }
            }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای اتصال به اینترنت',
            type:'unknown',
            ticketInfo: null
        }
    }

};

export const changeTicketStateByCode = async (token: string, code: string, state:boolean) : Promise<ChangeStateRes> => {

    console.warn('Code : ',code);

    try {
        let response = await fetch(`${baseUrl}/api/sportSites/reserves/items/code/${code}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                sportSiteReserveItemObj:{
                    acceptStatus:state
                }
            }),
        });

        // const responseJson = await response.json();

        console.warn('Code Status : ', response.status);

        switch (response.status) {
            case 200:
                return {
                    state:'success',
                    message:'با موفقیت تغییر کرد',
                };

            case 400:
                return {
                    state:'failed',
                    message:'خطای ناشناخته',
                };

            case 404:
                return {
                    state: 'failed',
                    message: 'چنین چیزی پیدا نشد',
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید',
                };
            default: {
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید',
                }
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




export const checkTicketByQrCode = async (token: string, sportReserveID:string) : Promise<VerifyRes> => {

    try {
        let response = await fetch(`${baseUrl}/api/sportSites/reserves/items/${sportReserveID}/check`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
                'Authorization': `Bearer ${token}`,
            },
        });

        const responseJson: Res = await response.json();

        console.warn('QrCode Res : ', responseJson);

        switch (response.status) {

            case 200:

                if (responseJson.success){
                    return {
                        state: "success",
                        message: responseJson.message,
                        type: 'confirmed',
                        ticketInfo:responseJson.reserveItemCard
                    }
                }else if (!responseJson.success && responseJson.sessionExpired && responseJson.sessionExpired !== undefined){
                    return {
                        state: "success",
                        message: responseJson.message,
                        type: 'expired',
                        ticketInfo:responseJson.reserveItemCard
                    }
                }else if (!responseJson.success && responseJson.acceptStatus && responseJson.acceptStatus !== null){
                    return {
                        state: "success",
                        message: responseJson.message,
                        type: 'used',
                        ticketInfo:responseJson.reserveItemCard
                    }
                }
                else {
                    return {
                        state: "success",
                        message: responseJson.message,
                        type: 'rejected',
                        ticketInfo:responseJson.reserveItemCard
                    };
                }

            case 400:
                return {
                    state: 'success',
                    message: responseJson.errs,
                    type:'notValid',
                    ticketInfo:null
                };

            case 401:
                return {
                    state: 'success',
                    message: responseJson.errs,
                    type:'notValid',
                    ticketInfo:null
                };

            case 404:
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته',
                    type : 'unknown',
                    ticketInfo:null
                };

            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید',
                    type:'unknown',
                    ticketInfo:null
                };

            default: {
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید',
                    type:'unknown',
                    ticketInfo:null
                }
            }

        }


    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            message: 'خطای اتصال به اینترنت',
            type:'unknown',
            ticketInfo:null
        }
    }

};

export const changeTicketStateByQrCode = async (token: string, sportReserveID: string,state:boolean) : Promise<ChangeStateRes> => {

    // console.warn('QrCode : ',sportReserveID);

    try {
        let response = await fetch(`${baseUrl}/api/sportSites/reserves/items/${sportReserveID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                sportSiteReserveItemObj:{
                    acceptStatus:state
                }
            }),
        });

        console.warn('QrCode Status : ', response.status);

        switch (response.status) {

            case 200:
                return {
                    state:'success',
                    message:'با موفقیت تغییر کرد',
                };

            case 400:
                return {
                    state:'failed',
                    message:'خطای ناشناخته',
                };

            case 404:
                return {
                    state: 'failed',
                    message: 'چنین چیزی پیدا نشد',
                };

            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید',
                };

            default: {
                return {
                    state: 'failed',
                    message: 'خطای ناشناخته',
                }
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
