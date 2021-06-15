import {baseUrl} from "../../ball-library/network";
import {TotalTransactions, TotalTransactionsRes, WalletTranRes} from "./types";


export const getTotalTransactions = async (token: string, sportSiteId: string): Promise<TotalTransactionsRes> => {

    try {
        let response = await fetch(`${baseUrl}/api/sportSites/${sportSiteId}/wallet?getTotalIncome=true`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Accept-Encoding': 'gzip,deflate',
            },
        });
        let responseJson: TotalTransactions = await response.json();

        // console.warn('TotalTransactions Response : ', responseJson);


        switch (response.status) {
            case 200:
                return {
                    state: 'success',
                    transactions: {
                        amount: responseJson.amount,
                        totalIncome: responseJson.totalIncome
                    },
                    message: 'مجموع تراکنش هاا'
                };
            case 500:
                return {
                    state: 'failed',
                    transactions: {
                        amount: 0,
                        totalIncome: 0
                    },
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default:
                return {
                    state: 'failed',
                    transactions: {
                        amount: 0,
                        totalIncome: 0
                    },
                    message: 'خطای ناشناخته'
                }
        }


    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            transactions: {
                amount: 0,
                totalIncome: 0
            },
            message: 'خطای اتصال به اینترنت'
        }
    }

};


export const getWalletTransactions = async (token: string, sportSiteId: string) : Promise<WalletTranRes> => {

    const pageNumber = 1;
    const pageSize = 10;


    try {
        let response = await fetch(`${baseUrl}/api/sportSites/${sportSiteId}/reserveItemCards?page=${pageNumber}&pageSize=${pageSize}`, {
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
