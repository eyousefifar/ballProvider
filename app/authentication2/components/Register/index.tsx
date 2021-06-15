import React, {useState} from 'react';
import {Image, ImageBackground, Keyboard, TextInput, ToastAndroid, View} from 'react-native';
import {Provider} from 'react-native-paper';
import {observer} from 'mobx-react';
import {Colors, defaultTheme, H2, H3, Header} from '../../../ball-library';
import {dismissAuthScreen, dismissConfirmScreen, dismissRegisterScreen} from '../../library/nav';
// styles
import styleGenerator from './styles';
// local
import SubmitButton from "../SubmitButton";
import {Formik} from "formik";
import * as Yup from "yup";

interface IRegisterPage {
    confirmKey: string,
    phone: string
}


const ConfirmSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, 'بسیار کوتاه')
        .max(100, 'بیشتر از حد مجاز')
        .required('وارد کردن این فیلد الزامی ست'),

    phone:Yup.string()
        .min(2, 'بسیار کوتاه')
        .max(100, 'بیشتر از حد مجاز')
        .required('وارد کردن این فیلد الزامی ست'),

    address : Yup.string()
        .min(2, 'بسیار کوتاه')
        .max(400, 'بیشتر از حد مجاز')
        .required('وارد کردن این فیلد الزامی ست'),
});

const RegisterPage = (props: IRegisterPage) => {

    const styles = styleGenerator();
    const {confirmKey, phone} = props;

    const [loading, setLoading] = useState<boolean>(false);

    const registerUser = async (values: any) => {
        /*await setLoading(true);
        let res = await signUpCustomer(confirmKey, values.name, phone);
        if (res.state === 'success') {
            // 1000 ms delay
            await setTimeout(() => {
            }, 1000);

            await setLoading(false);

            await Keyboard.dismiss();
            // await Navigation.dismissAllModals()

            await dismissRegisterScreen();
            await dismissConfirmScreen();
            await dismissAuthScreen();
        } else {
            setLoading(false);
            ToastAndroid.show(res.message, ToastAndroid.LONG)
        }*/
    };

    return (
        <Provider theme={defaultTheme}>
            <Header
                title={'ثبت نام'}
                backgroundColor={'transparent'}
                mode={'fullWidth'}
                drawBehind
                onPress={dismissRegisterScreen}
            />
            <ImageBackground source={require('../../../../assets/images/auth.jpg')} style={styles.container}>
                <View style={{alignItems: 'center', position: 'absolute', top: '10%'}}>
                    <Image source={require('../../assets/ball.png')} style={styles.logo}/>

                    <Formik
                        initialValues={{name: '', phone:'', address:''}}
                        validationSchema={ConfirmSchema}
                        onSubmit={registerUser}>
                        {({handleChange, handleBlur, handleSubmit, values, errors, touched}) => (
                            <View style={styles.input_container}>

                                <TextInput placeholder={'نام و نام خانوادگی'} onBlur={handleBlur('name')}
                                           value={values.name} style={styles.input} placeholderTextColor={Colors.whiteBall}
                                           onChangeText={handleChange('name')} keyboardType={'default'}
                                />
                                {errors.name && touched.name ? (
                                    <H2 style={styles.error_text}>{errors.name}</H2>
                                ) : null}


                                <TextInput placeholder={'شماره تماس'} onBlur={handleBlur('phone')}
                                           value={values.phone} style={[styles.input, {marginTop:6}]} placeholderTextColor={Colors.whiteBall}
                                           onChangeText={handleChange('phone')} keyboardType={'numeric'}
                                />
                                {errors.phone && touched.phone ? (
                                    <H2 style={styles.error_text}>{errors.phone}</H2>
                                ) : null}


                                <SubmitButton onClick={handleSubmit} label={'درخواست ثبت نام'} loading={loading}
                                              enable={values.name.length > 1 && values.phone.length > 3}/>
                            </View>
                        )}
                    </Formik>
                </View>

            </ImageBackground>


        </Provider>
    );
};

export default observer(RegisterPage);
