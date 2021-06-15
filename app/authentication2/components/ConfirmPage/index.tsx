import React, {useState} from 'react';
import {View, ToastAndroid, Keyboard, ImageBackground, Image, TextInput} from 'react-native';
import {Provider} from 'react-native-paper';
import {observer} from 'mobx-react';
import {auth, Colors, defaultTheme, H3, Header, userProfile} from '../../../ball-library';
import {Formik} from 'formik';
import * as Yup from 'yup'
import {
    dismissConfirmScreen,
    setRootAuthenticated,
    showChooseSportSiteModal,
} from '../../library/nav';
// styles
import styleGenerator from './styles';
// local
import SubmitButton from "../SubmitButton";
import {getSportSitesID, loginCustomer, loginCustomerSms} from "../../library/api";
import Timer from '../../components/Timer'


const ConfirmSchema = Yup.object().shape({
    confirmCode: Yup.string()
        .min(4, 'کد تایید حداقل 4 حرف است')
        .required('وارد کردن این فیلد الزامی ست'),
});


interface IConfirmPage {
    isLogin: boolean,
    phone: string
}

const ConfirmPage = (props: IConfirmPage) => {

    const styles = styleGenerator();
    const {phone} = props;

    // console.warn('phoneNumber : ', phone);

    const [loading, setLoading] = useState<boolean>(false);
    const [endTimer, setEndTimer] = useState<boolean>(false);


    const submitConfirmCode = async (values: any) => {
        await setLoading(true);

        await loginSection(values.confirmCode)
    };

    const loginSection = async (confirmCode: string) => {
        console.warn('phone : ', phone);

        let response = await loginCustomer(phone, confirmCode);
        if (response.state === 'success') {
            // do not send again register code
            await setEndTimer(true);

            await Keyboard.dismiss();

            // get all sports sites ID
            let res = await getSportSitesID(auth.getToken());

            if (res.state === 'success'){

                // go to choose sportSite page
                if (res.sportSitesData.length > 1){

                    await setLoading(false);
                    await showChooseSportSiteModal(res.sportSitesData)

                    // userProfile.setCurrentSportSite(res.sportSitesData[0].uuid);
                    // await setLoading(false);
                    // await setRootAuthenticated()

                }else {

                    // if provider has no sportSite
                    if (res.sportSitesData.length === 0){
                        await setLoading(false);
                        await showChooseSportSiteModal([])
                    }

                    // go to btn_nav
                    userProfile.setCurrentSportSite(res.sportSitesData[0].uuid);
                    await setLoading(false);
                    await setRootAuthenticated()
                }

            }else {
                // when there is no response for getSportSiteIDs
                await userProfile.getSportSiteIds();
                await setRootAuthenticated()
            }


        } else {
            setLoading(false);
            ToastAndroid.show(response.message, ToastAndroid.LONG)
        }
    };

    const handleSendAgain = async () => {

        console.warn('I Called !!!');

        await loginCustomerSms(phone)

    };

    return (
        <Provider theme={defaultTheme}>
            <Header
                title={'تایید کد'}
                backgroundColor={'transparent'}
                mode={'fullWidth'}
                drawBehind
                onPress={dismissConfirmScreen}
            />
            <ImageBackground source={require('../../../../assets/images/confirm.jpg')} style={styles.container}>
                <View style={{alignItems: 'center', position: 'absolute', top: '10%'}}>
                    <Image source={require('../../assets/ball.png')} style={styles.logo}/>

                    <Formik
                        initialValues={{confirmCode: ''}}
                        validationSchema={ConfirmSchema}
                        onSubmit={submitConfirmCode}
                    >
                        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                            <View style={styles.input_container}>
                                <TextInput placeholder={'کد تایید'} onBlur={handleBlur('confirmCode')}
                                           value={values.confirmCode} maxLength={4} style={styles.input}
                                           placeholderTextColor={Colors.whiteBall}
                                           onChangeText={handleChange('confirmCode')} keyboardType={'numeric'}
                                />
                                <View style={styles.under_box}>
                                    <Timer minutes={'00'} sendSmsAgain={handleSendAgain} endTimer={endTimer}/>
                                    {errors.confirmCode && touched.confirmCode ? (
                                        <H3 style={styles.error_text}>{errors.confirmCode}</H3>
                                    ) : null}
                                </View>
                                <SubmitButton onClick={handleSubmit} label={'تایید'} loading={loading}
                                              enable={values.confirmCode.length > 3}/>
                            </View>
                        )}
                    </Formik>
                </View>

            </ImageBackground>
        </Provider>
    );
};

export default observer(ConfirmPage);
