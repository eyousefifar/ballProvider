import React, {useState} from 'react';
import {Image, ImageBackground, ToastAndroid, View, TextInput} from 'react-native';
import {Provider} from 'react-native-paper';
import {observer} from 'mobx-react';
import {auth, Colors, defaultTheme, H2, Header} from '../../ball-library';
import {showConfirmScreen, showRegisterScreen} from '../library/nav';
// styles
import styleGenerator from './styles';
// local
import SubmitButton from "../components/SubmitButton";
import {Formik} from "formik";
import * as Yup from "yup";
import {loginCustomerSms} from "../library/api";
import {RectButton} from "react-native-gesture-handler";
import Button from "../../ball-library/Button";

// const phoneRegex: RegExp = /(\+98?)?{?(0?9[0-9]{9,9}}?)/;

const ConfirmSchema = Yup.object().shape({
    phone: Yup.string()
        // .matches(phoneRegex, 'شماره همراه معتبر نیست')
        .min(11, 'بسیار کوتاه')
        .max(12, 'بیشتر از حد مجاز')
        .required('وارد کردن این فیلد الزامی ست'),
});

const Authentication = () => {
    const styles = styleGenerator();


    console.warn('Token : ', auth.getToken());
    console.warn('isAuthorized : ', auth.isAuthorized);


    const [loading, setLoading] = useState<boolean>(false);


    const showRegisterOrLogin = async (values: any) => {
        // show loading
        await setLoading(true);

        let res = await loginCustomerSms(values.phone);

        if (res.state === 'success') {

            await setLoading(false);
            await showConfirmScreen(true, values.phone)

        } else {
            await setLoading(false);
            ToastAndroid.show(res.message, ToastAndroid.LONG)
        }
    };

    return (
        <Provider theme={defaultTheme}>
            <ImageBackground source={require('../../../assets/images/auth.jpg')} style={styles.container}>
                <View style={{alignItems: 'center', position: 'absolute', top: '10%'}}>
                    <Image source={require('../assets/ball.png')} style={styles.logo}/>
                    <Formik
                        initialValues={{phone: ''}}
                        validationSchema={ConfirmSchema}
                        onSubmit={showRegisterOrLogin}
                    >
                        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                            <View style={styles.input_container}>
                                <TextInput placeholder={'شماره همراه'} onBlur={handleBlur('phone')}
                                           value={values.phone} onChangeText={handleChange('phone')}
                                           keyboardType={'numeric'} style={styles.input}
                                           placeholderTextColor={Colors.whiteBall}
                                />

                                {errors.phone && touched.phone ? (
                                    <H2 style={styles.error_text}>{errors.phone}</H2>
                                ) : null}
                                <SubmitButton onClick={handleSubmit} label={'ارسال کد'} loading={loading}
                                              enable={values.phone.length > 10}/>
                            </View>
                        )}
                    </Formik>
                </View>

                {/*<View style={styles.register_btn_container}>
                    <RectButton style={styles.register_btn} onPress={showRegisterScreen}>
                        <H2 style={{color:Colors.whiteBall}}>درخواست ثبت مجموعه در بال</H2>
                    </RectButton>
                </View>*/}

                {/*<Button mode={'outlined'} size={'big'} onPress={showRegisterScreen} rippleColor={'grey'} style={{width:'90%',height:40,position:'absolute',bottom:12}}>
                    {'ورود یا ثبت نام'}
                </Button>*/}
            </ImageBackground>
        </Provider>
    );
};

export default observer(Authentication);

