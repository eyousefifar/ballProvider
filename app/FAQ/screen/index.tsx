import React from 'react';
import {View, Image, ScrollView, ImageBackground} from 'react-native';
import {Provider} from 'react-native-paper';
import {defaultTheme, H2, Header} from '../../ball-library';
import {FAQText} from '../constant';
// styles
import styleGenerator from './styles';
import {dismissFAQ} from "../library/nav";


const FAQ = () => {

    const styles = styleGenerator();

    return (
        <Provider theme={defaultTheme}>
            <ImageBackground source={require('../../../assets/images/aboutus2.jpg')} style={{flex: 1}}>
                <Header
                    title={'سوالات متداول'}
                    drawBehind={false}
                    mode={'fullWidth'}
                    onPress={dismissFAQ}
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
                            <H2 style={styles.text}>{FAQText}</H2>
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

export default FAQ;
