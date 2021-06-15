import React, {useRef, useState} from 'react';
import {Dimensions, View, PermissionsAndroid, ActivityIndicator} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styleGenerator from './styles';
import CardInfo from "../components/CardInfo";
import CameraBox from "../components/CameraBox";
import {Navigation} from "react-native-navigation";
import {Colors, H1, H2, screens} from "../../ball-library";
import {cameraTypesStore} from "../store/CameraTypesStore";
import {observer, Observer} from 'mobx-react';
import {observable, observe} from "mobx";
import {useNavigationComponentDidAppear, useNavigationComponentDidDisappear} from "react-native-navigation-hooks";
import Menu from "../components/Menu";
import {toggleDrawer} from "../library/nav";

const Scanner = () => {

    const cameraRef = useRef(null);


    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         camera: false,
    //
    // mounted: false,
    // ticketInfo: false,
    // };
    // }

    const styles = styleGenerator();

    const [camera, setCamera] = useState<boolean>(false);
    const [cameraStatus, setCameraStatus] = useState<'AUTHORIZED' | 'PENDING_AUTHORIZATION' | 'NOT_AUTHORIZED' | 'READY'>('AUTHORIZED');
    const [mounted, setMounted] = useState<boolean>(false);
    const [ticketInfo, setTicketInfo] = useState<boolean>(false);

    const renderNotAuthorizedView = () => {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                {/*<H1>به دوربین اجازه بدهید تا بتوانید کد ها را اسکن کنید</H1>*/}
            </View>
        )
    };

    const renderPendingAuthorizationView = () => {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <ActivityIndicator size={25} color={Colors.primaryPurple}/>
            </View>
        )
    };

    const barcodeRecognized = async ({data, rawData, type}) => {

        console.warn('data : ', data);
        // console.warn('rawData : ', rawData);
        // console.warn('type  : ', type);

        cameraTypesStore.setVerifyMethod('qrCode');
        cameraTypesStore.setQrCode(data);

        // Send QrCode to Server
        await cameraTypesStore.checkQrCode();
    };

    useNavigationComponentDidAppear(async e => {
        await requestCameraPermission();
        setMounted(true)

    }, screens.qrCode.id);

    useNavigationComponentDidDisappear(e => {
        setMounted(false)
    }, screens.qrCode.id);

    const handelChangeStatus = (e:any) => {
        // TODO : make not authorized page
        setCameraStatus(e.cameraStatus);
        console.warn('Status is : ', e.cameraStatus )
    };

    async function requestCameraPermission() {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.CAMERA,
                {
                    title: 'اسکنر',
                    message:
                        'به بال اجازه بدهید تا بتواند کد های شما را اسکن کند',
                    buttonNeutral: 'برای بعد',
                    buttonNegative: 'خیر',
                    buttonPositive: 'بله',
                },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.warn('You can use the camera');
                setCameraStatus('AUTHORIZED')
            } else {
                console.warn('Camera permission denied');
                setCameraStatus('NOT_AUTHORIZED')
            }
        } catch (err) {
            console.warn(err);
        }
    }


    if (mounted)

        switch (cameraStatus) {
            case "AUTHORIZED":
                return (
                    <View style={styles.container}>
                        <Menu onIconPress={toggleDrawer}/>

                        {cameraTypesStore.type === 'unknown' &&
                        <RNCamera
                            ref={cameraRef}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            notAuthorizedView={renderNotAuthorizedView()}
                            pendingAuthorizationView={renderPendingAuthorizationView()}
                            captureAudio={false}
                            onStatusChange={handelChangeStatus}
                            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                            androidCameraPermissionOptions={{
                                title: 'اجازه دسترسی به دوربین برای اسکن بارکد',
                                message: 'به دوربین برای اسکن بارکد اجازه بدهید',
                                buttonPositive: 'باشه',
                                buttonNegative: 'نه',
                                buttonNeutral: 'بعدا'
                            }}
                            onBarCodeRead={(cameraTypesStore.canDetectBarcode) ? barcodeRecognized : null}
                        />
                        }


                        <CameraBox/>

                        <CardInfo/>

                    </View>
                );
            case "READY":
                return (
                    <View style={styles.container}>

                        <Menu onIconPress={toggleDrawer}/>
                        {cameraTypesStore.type === 'unknown' &&
                        <RNCamera
                            ref={cameraRef}
                            style={styles.preview}
                            type={RNCamera.Constants.Type.back}
                            notAuthorizedView={renderNotAuthorizedView()}
                            pendingAuthorizationView={renderPendingAuthorizationView()}
                            captureAudio={false}
                            onStatusChange={handelChangeStatus}
                            barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                            androidCameraPermissionOptions={{
                                title: 'اجازه دسترسی به دوربین برای اسکن بارکد',
                                message: 'به دوربین برای اسکن بارکد اجازه بدهید',
                                buttonPositive: 'باشه',
                                buttonNegative: 'نه',
                                buttonNeutral: 'بعدا'
                            }}
                            onBarCodeRead={(cameraTypesStore.canDetectBarcode) ? barcodeRecognized : null}
                        />
                        }


                        <CameraBox/>

                        <CardInfo/>

                    </View>
                );
            case "PENDING_AUTHORIZATION":
                return (
                    <View style={styles.container}/>
                );
            case "NOT_AUTHORIZED":
                return (
                    <View style={[styles.container,{justifyContent:'center'}]}>
                        <H2>می توانید در تنظیمات به دوربین اجازه دسترسی بدهید</H2>
                    </View>
                );
            default:
                return (
                    <View style={styles.container}/>
                )

        }


    else
        return (
            <View style={styles.container}/>
        )


};

export default observer(Scanner)
