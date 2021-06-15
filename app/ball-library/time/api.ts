import {baseUrl} from "../network";

interface ITimeRes {
    state:'success' | 'failed',
    time:string
}

export const getTimeAndDate = async (): Promise<ITimeRes> => {
    try {
        let response = await fetch(`${baseUrl}/api/utils/getDate`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        let responseJson = await response.json();

        // console.warn('TimeAndDate : ',responseJson);

        if (response.status === 200) {
            return {
                state:"success",
                time:responseJson.date
            }
        } else {
            return {
                state:"failed",
                time:'NoTime'
            }
        }

    } catch (e) {
        console.warn(e.toString());
        return {
            state:"failed",
            time:'NoTime'
        }
    }
};
