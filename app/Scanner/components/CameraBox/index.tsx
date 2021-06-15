import React from 'react';
import {View, Dimensions, Image} from 'react-native';
import styleGenerator from './styles';

import {observer} from 'mobx-react';
import {Colors, H2} from "../../../ball-library";
import {BarcodeMask} from "@nartc/react-native-barcode-mask";
import {cameraTypesStore} from "../../store/CameraTypesStore";


const {width} = Dimensions.get('window');
const cameraSize = width * 8 / 10 - 24;


const CameraBox = () => {

    const styles = styleGenerator();


    switch (cameraTypesStore.type) {
        case "unknown":
            return(
                <View style={[styles.qrCode_box,{marginTop:0,position:'absolute', top: 48,}]}>

                    <View style={[styles.border_hor_1]}/>
                    <View style={[styles.border_ver_1]}/>

                    <View style={[styles.border_hor_2]}/>
                    <View style={[styles.border_ver_2]}/>

                    <BarcodeMask width={cameraSize} height={cameraSize} edgeWidth={0} maskOpacity={1}
                                 edgeHeight={0} edgeColor={'transparent'}
                    />

                    <View style={[styles.border_hor_3]}/>
                    <View style={[styles.border_ver_3]}/>

                    <View style={[styles.border_hor_4]}/>
                    <View style={[styles.border_ver_4]}/>

                </View>
            );

        case "confirmed":
            return(
                <View style={styles.qrCode_box}>

                    <View style={[styles.border_hor_1]}/>
                    <View style={[styles.border_ver_1]}/>

                    <View style={[styles.border_hor_2]}/>
                    <View style={[styles.border_ver_2]}/>

                    <Image source={require('../../assets/qrcode.png')} style={styles.defaultQrCode} />

                    <View style={[styles.border_hor_3]}/>
                    <View style={[styles.border_ver_3]}/>

                    <View style={[styles.border_hor_4]}/>
                    <View style={[styles.border_ver_4]}/>

                </View>
            );

        case "expired":
            return(
                <View style={styles.qrCode_box}>

                    <View style={[styles.border_hor_1, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_1, {backgroundColor: Colors.redDiscount}]}/>

                    <View style={[styles.border_hor_2, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_2, {backgroundColor: Colors.redDiscount}]}/>

                    <Image source={require('../../assets/qrcode.png')} style={styles.defaultQrCode} />


                    <View style={styles.alert_box}>
                        <H2 style={{color:Colors.whiteBall}}>{cameraTypesStore.message}</H2>
                    </View>

                    <View style={[styles.border_hor_3, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_3, {backgroundColor: Colors.redDiscount}]}/>

                    <View style={[styles.border_hor_4, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_4, {backgroundColor: Colors.redDiscount}]}/>

                </View>
            );

        case "notValid":
            return(
                <View style={styles.qrCode_box}>

                    <View style={[styles.border_hor_1, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_1, {backgroundColor: Colors.redDiscount}]}/>

                    <View style={[styles.border_hor_2, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_2, {backgroundColor: Colors.redDiscount}]}/>

                    <Image source={require('../../assets/qrcode.png')} style={styles.defaultQrCode} />


                    <View style={styles.alert_box}>
                        <H2 style={{color:Colors.whiteBall}}>{cameraTypesStore.message}</H2>
                    </View>

                    <View style={[styles.border_hor_3, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_3, {backgroundColor: Colors.redDiscount}]}/>

                    <View style={[styles.border_hor_4, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_4, {backgroundColor: Colors.redDiscount}]}/>

                </View>
            );

        case "rejected":
            return(
                <View style={styles.qrCode_box}>

                    <View style={[styles.border_hor_1, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_1, {backgroundColor: Colors.redDiscount}]}/>

                    <View style={[styles.border_hor_2, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_2, {backgroundColor: Colors.redDiscount}]}/>

                    <Image source={require('../../assets/qrcode.png')} style={styles.defaultQrCode} />


                    <View style={styles.alert_box}>
                        <H2 style={{color:Colors.whiteBall}}>{cameraTypesStore.message}</H2>
                    </View>

                    <View style={[styles.border_hor_3, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_3, {backgroundColor: Colors.redDiscount}]}/>

                    <View style={[styles.border_hor_4, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_4, {backgroundColor: Colors.redDiscount}]}/>

                </View>
            );

        // TODO : Edit this one later

        case "used":
            return(
                <View style={styles.qrCode_box}>

                    <View style={[styles.border_hor_1, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_1, {backgroundColor: Colors.redDiscount}]}/>

                    <View style={[styles.border_hor_2, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_2, {backgroundColor: Colors.redDiscount}]}/>

                    <Image source={require('../../assets/qrcode.png')} style={styles.defaultQrCode} />


                    <View style={styles.alert_box}>
                        <H2 style={{color:Colors.whiteBall}}>این کد قبلا استفاده شده است !</H2>
                    </View>


                    <View style={[styles.border_hor_3, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_3, {backgroundColor: Colors.redDiscount}]}/>

                    <View style={[styles.border_hor_4, {backgroundColor: Colors.redDiscount}]}/>
                    <View style={[styles.border_ver_4, {backgroundColor: Colors.redDiscount}]}/>

                </View>
            );
    }
};


export default observer(CameraBox);
