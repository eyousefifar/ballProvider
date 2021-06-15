import React from 'react';
import {View, Image, ScrollView, ImageBackground} from 'react-native';
import {Provider} from 'react-native-paper';
import {defaultTheme, H2, Header} from '../../ball-library';
import {dismissAboutUs, showPrivacyModal} from '../library/nav';

import {aboutUsText} from '../constant';
// styles
import styleGenerator from './styles';
import {RectButton} from "react-native-gesture-handler";



const AboutUs = () => {

    const styles = styleGenerator();


    const handlePrivacyPage = async () => {
        await showPrivacyModal()
    };


    return (
        <Provider theme={defaultTheme}>
            <ImageBackground source={require('../../../assets/images/aboutus2.jpg')} style={{flex: 1}}>
                <Header
                    title={'درباره ما'}
                    drawBehind={false}
                    mode={'fullWidth'}
                    onPress={dismissAboutUs}
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
                            <H2 style={styles.text}>{aboutUsText}</H2>
                        </ScrollView>
                    </View>
                    <View style={styles.footer_container}>
                        <RectButton style={styles.footer_btn} onPress={handlePrivacyPage}>
                            <H2 style={[styles.footer_text, {textDecorationLine: 'underline'}]}>شرایط و قوانین بال</H2>
                        </RectButton>
                        <H2 style={styles.footer_text}>نسخه : 0.0.1</H2>
                    </View>
                </View>

            </ImageBackground>
        </Provider>
    );
};

export default AboutUs;
