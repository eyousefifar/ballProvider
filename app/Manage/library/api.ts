import {baseUrl, timeClass, userProfile} from '../../ball-library'
import {ChangeStateRes, SansesRes, SansList} from './types'
import moment from "moment-jalaali";
import qs from "qs";


export const getSanes = async (token: string, sportSiteUUID: string, monthIndex: number, dayIndex: number): Promise<SansesRes> => {
    let persianDate = `${timeClass.currentYear}//${monthIndex + 1}/${dayIndex + 1}`;
    let normalDate = moment(persianDate, 'jYYYY/jM/jD').format('YYYY-MM-DD');

    // console.warn('RED DEAD')
    // console.warn('normal Date : ', normalDate);

    let filterQuery = qs.stringify({
        odataStr: `$filter=date eq '${normalDate}'`
    });

    // console.log(filterQuery);
    // console.warn(filterQuery);

    console.warn('SportID : ', sportSiteUUID);


    try {
        let response = await fetch(`${baseUrl}/api/sportSites/${sportSiteUUID}/sessions/userType/provider?${filterQuery}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
                'Authorization': `Bearer ${token}`,
            },
        });
        let responseJson = await response.json();

        // console.warn('Sanses Response : ', responseJson);
        // console.warn('Sanses Status : ', response.status);

        if (response.status === 200) {
            return {
                state: "success",
                sanses: responseJson.sessions,
                message: 'سانس ها ',
            }
        } else {
            return {
                state: 'failed',
                sanses: [],
                message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
            }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state: 'failed',
            sanses: [],
            message: 'خطای اتصال به اینترنت'
        }
    }
};

export const changeSportSiteState = async (token: string, sportSiteSessionUUID: string, enableStatus: boolean): Promise<ChangeStateRes> => {

    // console.warn('State : ', enableStatus);

    try {
        let response = await fetch(`${baseUrl}/api/sportSites/sessions/${sportSiteSessionUUID}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept-Encoding': 'gzip,deflate',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify({
                enableStatus: enableStatus,
            }),
        });

        switch (response.status) {
            case 200:
                return {
                    state: "success",
                    message: 'با موفقیت تغییر کرد',
                };
            case 404:
                let responseJson = response.json();
                return {
                    state: 'failed',
                    message: responseJson.errs
                };
            case 500:
                return {
                    state: 'failed',
                    message: 'خطای سرور لطفا بعدا دوباره تلاش کنید'
                };
            default: {
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
            message: 'خطای اتصال به اینترنت'
        }
    }
};
