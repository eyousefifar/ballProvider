import React, {useState} from 'react';
import {View, TextInput, ToastAndroid} from 'react-native';
import styleGenerator from './styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view'


import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
import {auth, Colors, H1, H2, H3} from "../../../ball-library";
import {changeTicketStateByCode, changeTicketStateByQrCode} from "../../library/api";
import {cameraTypesStore} from "../../store/CameraTypesStore";
import {Formik} from "formik";
import * as Yup from "yup";
import moment, {weekdays} from "moment-jalaali";

const ConfirmSchema = Yup.object().shape({
    code: Yup.string()
        // .min(4, 'بسیار کوتاه') TODO : Ask this later
        .required('وارد کردن این فیلد الزامی ست'),
});

const CardInfo = () => {

    const styles = styleGenerator();

    const [code,setCode] = useState<string>('');

    console.warn('QR-Code Is : ', cameraTypesStore.qrCode);

    const getDay = (date: string) => {
        let d = moment(date);
        return weekdays(d.day())
    };

    const formatTime = (time: string | undefined): string | undefined => {
        if (time != undefined){
            const times = time.split(':');
            return `${times[0]}:${times[1]}`;
        }else {
            return time
        }

    };


    const acceptButton = async () => {
        if (cameraTypesStore.verifyMethod === "input"){
            // when user used input for validating
            let res = await changeTicketStateByCode(auth.getToken(),code,true);

            if (res.state === 'success'){
                ToastAndroid.show('با موفقیت تایید شد',ToastAndroid.LONG);
                cameraTypesStore.setType('unknown')
            }


        }else {
            // when user used qrCode for validating
            let res = await changeTicketStateByQrCode(auth.getToken(),cameraTypesStore.qrCode,true);

            if (res.state === 'success'){
                ToastAndroid.show('با موفقیت تایید شد',ToastAndroid.LONG);
                // return to last state
                cameraTypesStore.setType('unknown');

                // now user can detect more qrCodes again
                cameraTypesStore.setCanDetectBarcode(true)
            }

        }


    };

    const rejectButton = async () => {

        if (cameraTypesStore.verifyMethod === 'input'){
            // when user used input for validating

            if (cameraTypesStore.type === 'confirmed' || cameraTypesStore.type === 'expired' || cameraTypesStore.type === 'used' ){
                let res = await changeTicketStateByCode(auth.getToken(),code,false);

                if (res.state === 'success'){
                    ToastAndroid.show('با موفقیت رد شد',ToastAndroid.LONG);
                    cameraTypesStore.setType('unknown')
                }
            }else {
                // rejected || not Valid => States
                cameraTypesStore.setType('unknown')
            }

        }else {
            // when user used qrCode for validating
            if (cameraTypesStore.type === 'confirmed' || cameraTypesStore.type === 'expired' || cameraTypesStore.type === 'used' ){
                let res = await changeTicketStateByQrCode(auth.getToken(),cameraTypesStore.qrCode,false);

                if (res.state === 'success'){
                    ToastAndroid.show('با موفقیت رد شد',ToastAndroid.LONG);
                    cameraTypesStore.setType('unknown');

                    // now user can detect more qrCodes again
                    cameraTypesStore.setCanDetectBarcode(true)
                }
            }else {
                // rejected || not Valid => States
                cameraTypesStore.setCanDetectBarcode(true);
                cameraTypesStore.setType('unknown');
            }

        }

    };

    const submitButton = async (values: any) => {

        // Set Verify Mode
        await cameraTypesStore.setVerifyMethod('input');

        await setCode(values.code);

        // Send Input To Server & Validate
        await cameraTypesStore.checkCode(values.code)
    };

    switch (cameraTypesStore.type) {
        case 'unknown':
            return (
                <View style={styles.card_info_container}>

                    <Formik
                        initialValues={{code: ''}}
                        validationSchema={ConfirmSchema}
                        onSubmit={submitButton}
                    >
                        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                            // <KeyboardAwareScrollView style={styles.input_container} enableOnAndroid={true} extraHeight={100}>
                                <View style={styles.input_container}>

                                    <TextInput style={styles.input_code} onBlur={handleBlur('code')}
                                               placeholder={'کد عددی را وارد کنید'} onChangeText={handleChange('code')}
                                               keyboardType={'numeric'} value={values.code}
                                    />

                                    {errors.code && touched.code ? (
                                        <H3 style={{color: Colors.redDiscount}}>{errors.code}</H3>
                                    ) : null}


                                    <RectButton style={styles.acc_btn} onPress={handleSubmit}>
                                        <H2 style={styles.text_btn}>تایید</H2>
                                    </RectButton>

                                </View>
                            // </KeyboardAwareScrollView>
                        )}
                    </Formik>


                </View>
            );

        case 'confirmed':
            // @ts-ignore
            const day = getDay(cameraTypesStore.ticketInfo?.session.date);
            let confirmedDate = moment(cameraTypesStore.ticketInfo?.session.date).format('jYYYY/jM/jD');

            return (
                <View style={styles.card_info_container}>
                    <H1>{cameraTypesStore.ticketInfo?.reserve.user.name}</H1>

                    <View style={[styles.card_info, {marginTop: 12}]}>
                        <H3>{cameraTypesStore.ticketInfo?.session.sportType}</H3>
                        <H3>{day}</H3>
                    </View>

                    <View style={styles.card_info}>
                        <H3>{formatTime(cameraTypesStore.ticketInfo?.session.sessionTime.startTime)} - {formatTime(cameraTypesStore.ticketInfo?.session.sessionTime.endTime)}</H3>
                        <H3>{confirmedDate}</H3>
                    </View>

                    <View style={styles.btn_container}>

                        <RectButton style={styles.accept_btn} onPress={acceptButton}>
                            <H2 style={styles.text_btn}>قبول بلیط</H2>
                        </RectButton>

                        <RectButton style={styles.cancel_btn} onPress={rejectButton}>
                            <H2 style={styles.text_btn}>رد کردن</H2>
                        </RectButton>

                    </View>
                </View>
            );

        case "expired":
            // @ts-ignore
            const expiredDay = getDay(cameraTypesStore.ticketInfo?.session.date);
            let expiredDate = moment(cameraTypesStore.ticketInfo?.session.date).format('jYYYY/jM/jD');

            return (
                <View style={styles.card_info_container}>
                    <H1>{cameraTypesStore.ticketInfo?.reserve.user.name}</H1>

                    <View style={[styles.card_info, {marginTop: 12}]}>
                        <H3>{cameraTypesStore.ticketInfo?.session.sportType}</H3>
                        <H3>{expiredDay}</H3>
                    </View>

                    <View style={styles.card_info}>
                        <H3>{formatTime(cameraTypesStore.ticketInfo?.session.sessionTime.startTime)} - {formatTime(cameraTypesStore.ticketInfo?.session.sessionTime.endTime)}</H3>
                        <H3>{expiredDate}</H3>
                    </View>

                    <View style={styles.btn_container}>

                        <RectButton style={styles.accept_btn} onPress={acceptButton}>
                            <H2 style={styles.text_btn}>قبول بلیط</H2>
                        </RectButton>

                        <RectButton style={styles.cancel_btn} onPress={rejectButton}>
                            <H2 style={styles.text_btn}>رد کردن</H2>
                        </RectButton>

                    </View>
                </View>
            );

        case "rejected":
            // @ts-ignore
            const rejectedDay = getDay(cameraTypesStore.ticketInfo?.session.date);
            let rejectedDate = moment(cameraTypesStore.ticketInfo?.session.date).format('jYYYY/jM/jD');

            return (
                <View style={styles.card_info_container}>
                    <H1>{cameraTypesStore.ticketInfo?.reserve.user.name}</H1>

                    <View style={[styles.card_info, {marginTop: 12}]}>
                        <H3>{cameraTypesStore.ticketInfo?.session.sportType}</H3>
                        <H3>{rejectedDay}</H3>
                    </View>

                    <View style={styles.card_info}>
                        <H3>{formatTime(cameraTypesStore.ticketInfo?.session.sessionTime.startTime)} - {formatTime(cameraTypesStore.ticketInfo?.session.sessionTime.endTime)}</H3>
                        <H3>{rejectedDate}</H3>
                    </View>

                    <View style={styles.btn_container}>

                        <RectButton style={styles.accept_btn} onPress={acceptButton}>
                            <H2 style={styles.text_btn}>قبول بلیط</H2>
                        </RectButton>

                        <RectButton style={styles.cancel_btn} onPress={rejectButton}>
                            <H2 style={styles.text_btn}>رد کردن</H2>
                        </RectButton>

                    </View>
                </View>
            );

        case "notValid":
            return (
                <RectButton style={[styles.card_info_container, {backgroundColor: Colors.redDiscount, marginTop: 48}]}
                            onPress={rejectButton}>
                    <H2 style={{color: Colors.whiteBall}}>رد کردن</H2>
                </RectButton>
            );


        // TODO : Edit this one later

        case "used":
            // @ts-ignore
            const usedDay = getDay(cameraTypesStore.ticketInfo?.session.date);
            let usedDate = moment(cameraTypesStore.ticketInfo?.session.date).format('jYYYY/jM/jD');
            return (
                <View style={styles.card_info_container}>
                    <H1>{cameraTypesStore.ticketInfo?.reserve.user.name}</H1>

                    <View style={[styles.card_info, {marginTop: 12}]}>
                        <H3>{cameraTypesStore.ticketInfo?.session.sportType}</H3>
                        <H3>{usedDay}</H3>
                    </View>

                    <View style={styles.card_info}>
                        <H3>{formatTime(cameraTypesStore.ticketInfo?.session.sessionTime.startTime)} - {formatTime(cameraTypesStore.ticketInfo?.session.sessionTime.endTime)}</H3>
                        <H3>{usedDate}</H3>
                    </View>

                    <View style={styles.btn_container}>

                        <RectButton style={styles.accept_btn} onPress={acceptButton}>
                            <H2 style={styles.text_btn}>قبول بلیط</H2>
                        </RectButton>

                        <RectButton style={styles.cancel_btn} onPress={rejectButton}>
                            <H2 style={styles.text_btn}>رد کردن</H2>
                        </RectButton>

                    </View>
                </View>
            );
    }
};


export default observer(CardInfo);
