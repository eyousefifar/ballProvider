import {baseUrl} from "../../ball-library/network";
import {TranRes} from "./types";
import moment from "moment-jalaali";
import qs from "qs";
import {timeClass} from "../../ball-library";


export const getTransactions = async (token: string, sportSiteId: string, monthIndex: number, dayIndex: number, pageNumber: number, query:string): Promise<TranRes> => {
    let persianDate = `${timeClass.currentYear}/${monthIndex + 1}/${dayIndex + 1}`;
    let normalDate = moment(persianDate, 'jYYYY/jM/jD').format('YYYY-M-D');
    const pageSize = 30;

    let filterQuery = qs.stringify({
        odataStr: `$filter=date eq '${normalDate}'`
    });


    try {
        let response = await fetch(`${baseUrl}/api/sportSites/${sportSiteId}/reserveItemCards?userName=${query}&page=${pageNumber}&pageSize=${pageSize}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept-Encoding': 'gzip,deflate',
            },
        });
        let responseJson = await response.json();

        // console.warn('WalletTransactions Response : ', responseJson);


        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    transactions: responseJson,
                    message: 'تمامی تراکنش ها'
                };
            case 500:
                return {
                    state: 'failed',
                    transactions: [],
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    transactions: [],
                    message: 'خطای ناشناخته'
                }
        }


    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            transactions: [],
            message: 'خطای اتصال به اینترنت'
        }
    }

};
