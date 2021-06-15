import React from 'react';
import {View, Image, ScrollView, ImageBackground} from 'react-native';
import {Provider} from 'react-native-paper';
import {defaultTheme, H2, Header} from '../../ball-library';

import {privacyAndPolicyText} from '../constant';
// styles
import styleGenerator from './styles';
import {dismissPrivacy} from "../library/nav";


const PrivacyAndPolicy = (props) => {

    const styles = styleGenerator();
    console.warn('Send : ', props.send)

    return (
        <Provider theme={defaultTheme}>
            <ImageBackground source={require('../../../assets/images/aboutus2.jpg')} style={{flex: 1}}>
                <Header
                    title={'شرایط و قوانین بال'}
                    drawBehind={false}
                    mode={'fullWidth'}
                    onPress={dismissPrivacy}
                    backgroundColor={'transparent'}
                />

                <View style={styles.container}>
                    <View style={styles.aboutUsTextContainer}>
                        <Image source={require('../../authentication2/assets/ball.png')}
                               style={{width: 80, height: 125}}/>
                        <ScrollView
                            style={styles.scrollView}
                            contentContainerStyle={styles.scrollPadding}
                            indicatorStyle={'white'}>
                            <H2 style={styles.text}>{privacyAndPolicyText}</H2>
                        </ScrollView>
                    </View>
                    <View style={styles.footer_container}>
                        <H2 style={styles.footer_text}>نسخه : 0.0.1</H2>
                    </View>
                </View>


            </ImageBackground>
        </Provider>
    );
};

export default PrivacyAndPolicy;
