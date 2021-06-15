import {action, computed, decorate, observable} from 'mobx';
import {checkTicketByCode, checkTicketByQrCode} from '../library/api';
import {auth} from '../../ball-library';
import {ToastAndroid} from "react-native";
import {TicketInfo} from "../library/types";


class CameraTypesStore {
    // observables
    type: 'confirmed' | 'expired' | 'notValid' | 'rejected' | 'used' | 'unknown' = 'unknown';
    qrCode: string = '';
    message: string = '';
    ticketInfo : TicketInfo | null = null;


    verifyMethod: 'qrCode' | 'input' = "qrCode";

    canDetectBarcode: boolean = true;

    // computed

    // action
    setType = (type: 'confirmed' | 'expired' | 'notValid' | 'rejected' | 'used' | 'unknown') => {
        this.type = type
    };
    setQrCode = (qrCode: string) => {
        this.qrCode = qrCode
    };
    setVerifyMethod = (verifyMethod: 'qrCode' | 'input') => {
        this.verifyMethod = verifyMethod
    };

    setCanDetectBarcode = (canDetect: boolean) => {
        this.canDetectBarcode = canDetect;
    };

    checkCode = async (code: string) => {
        let res = await checkTicketByCode(auth.getToken(), code);

        if (res.state === 'success') {
            switch (res.type) {
                case 'confirmed':
                    this.type = 'confirmed';

                    // return ticket info to user
                    this.ticketInfo = res.ticketInfo;

                    ToastAndroid.show(res.message, ToastAndroid.SHORT);

                    console.warn('Type : ', this.type);

                    break;

                case 'expired':
                    this.type = 'expired';

                    // return ticket info to user
                    this.ticketInfo = res.ticketInfo;

                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    this.message = res.message;

                    console.warn('Type : ', this.type)

                    break;

                case 'rejected':
                    this.type = 'rejected';

                    // return ticket info to user
                    this.ticketInfo = res.ticketInfo;

                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    this.message = res.message;

                    console.warn('Type : ', this.type)

                    break;

                case 'used':
                    this.type = 'used';
                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    // TODO : check this one later
                    this.message = res.message;

                    console.warn('Type : ', this.type);

                    break;

                case 'notValid':
                    this.type = 'notValid';
                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    this.message = res.message;

                    console.warn('Type : ', this.type)

                    break;

                default:
                    this.type = 'unknown';
            }
        } else {
            this.type = 'unknown';
            ToastAndroid.show(res.message, ToastAndroid.SHORT)
        }
    };

    checkQrCode = async () => {
        let res = await checkTicketByQrCode(auth.getToken(),this.qrCode);

        if (res.state === 'success') {
            switch (res.type) {
                case 'confirmed':
                    this.type = 'confirmed';

                    // return ticket info to user
                    this.ticketInfo = res.ticketInfo;

                    ToastAndroid.show(res.message, ToastAndroid.SHORT);

                    console.warn('Type : ', this.type);
                    cameraTypesStore.setCanDetectBarcode(false);

                    break;

                case 'expired':
                    this.type = 'expired';

                    // return ticket info to user
                    this.ticketInfo = res.ticketInfo;

                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    this.message = res.message;

                    console.warn('Type : ', this.type);
                    cameraTypesStore.setCanDetectBarcode(false);


                    break;

                case 'notValid':
                    this.type = 'notValid';
                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    this.message = res.message;

                    console.warn('Type : ', this.type);
                    cameraTypesStore.setCanDetectBarcode(false);


                    break;

                case 'rejected':
                    this.type = 'rejected';

                    // return ticket info to user
                    this.ticketInfo = res.ticketInfo;

                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    this.message = res.message;

                    console.warn('Type : ', this.type);
                    cameraTypesStore.setCanDetectBarcode(false);


                    break;

                case 'used':
                    this.type = 'used';

                    // return ticket info to user
                    this.ticketInfo = res.ticketInfo;

                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    // TODO : check this one later
                    this.message = res.message;

                    console.warn('Type : ', this.type);
                    cameraTypesStore.setCanDetectBarcode(false);


                    break;

                default:
                    this.type = 'unknown';
            }
        } else {
            this.type = 'unknown';
            ToastAndroid.show(res.message, ToastAndroid.SHORT)
        }
    }
}

decorate(CameraTypesStore, {
    // observables
    type: observable,
    qrCode: observable,
    message: observable,
    canDetectBarcode: observable,

    verifyMethod:observable,

    ticketInfo:observable,

    // computed


    // actions
    setType: action,
    setQrCode: action,

    setVerifyMethod:action,

    setCanDetectBarcode: action
});

export const cameraTypesStore = new CameraTypesStore();
