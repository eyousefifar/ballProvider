// import React from 'react';
// import {Dimensions, View, PermissionsAndroid, ActivityIndicator} from 'react-native';
// import {RNCamera} from 'react-native-camera';
// import styleGenerator from './styles';
// import CardInfo from "../components/CardInfo";
// import CameraBox from "../components/CameraBox";
// import {Navigation} from "react-native-navigation";
// import {Colors, H1, screens} from "../../ball-library";
// import {cameraTypesStore} from "../store/CameraTypesStore";
// import {observer, Observer} from 'mobx-react';
// import {observable, observe} from "mobx";
//
// class Scanner extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             camera: false,
//
//             mounted: false,
//             ticketInfo: false,
//         };
//     }
//
//     renderNotAuthorizedView = () => {
//         return (
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//                 <H1>به دوربین اجازه بدهید تا بتوانید کد ها را اسکن کنید</H1>
//             </View>
//         )
//     };
//
//     renderPendingAuthorizationView = () => {
//         return (
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//                 <ActivityIndicator size={25} color={Colors.primaryPurple}/>
//             </View>
//         )
//     };
//
//     barcodeRecognized = async ({data, rawData, type}) => {
//
//         console.warn('data : ', data);
//         // console.warn('rawData : ', rawData);
//         // console.warn('type  : ', type);
//
//         cameraTypesStore.setVerifyMethod('qrCode');
//         cameraTypesStore.setQrCode(data);
//
//         // Send QrCode to Server
//         await cameraTypesStore.checkQrCode();
//     };
//
//     componentDidMount() {
//         // @ts-ignore
//         this.navigationEventListener = Navigation.events().bindComponent(this, screens.qrCode.id);
//     }
//
//     componentWillUnmount() {
//         // @ts-ignore
//         if (this.navigationEventListener) {
//             // @ts-ignore
//             this.navigationEventListener.remove();
//         }
//     }
//
//     componentDidAppear() {
//         this.setState({
//             mounted: true,
//         });
//         // this.requestCameraPermission();
//     }
//
//     componentDidDisappear() {
//         this.setState({
//             mounted: false,
//         });
//     }
//
//
//     render() {
//         const styles = styleGenerator();
//
//
//         if (this.state.mounted)
//             return (
//                 <View style={styles.container}>
//
//
//                     {cameraTypesStore.type === 'unknown' &&
//                     <RNCamera
//                         ref={ref => {
//                             this.camera = ref;
//                         }}
//                         style={styles.preview}
//                         type={RNCamera.Constants.Type.back}
//                         notAuthorizedView={this.renderNotAuthorizedView()}
//                         pendingAuthorizationView={this.renderPendingAuthorizationView()}
//                         captureAudio={false}
//                         barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
//                         androidCameraPermissionOptions={{
//                             title: 'اجازه دسترسی به دوربین برای اسکن بارکد',
//                             message: 'به دوربین برای اسکن بارکد اجازه بدهید',
//                             buttonPositive: 'باشه',
//                             buttonNegative: 'نه',
//                             buttonNeutral: 'بعدا'
//                         }}
//                         onBarCodeRead={(cameraTypesStore.canDetectBarcode) ? this.barcodeRecognized : null}
//                     />
//                     }
//
//
//                     <CameraBox/>
//
//                     <CardInfo/>
//
//                 </View>
//             );
//         else
//             return (
//                 <View style={styles.container}/>
//             )
//
//
//     }
// }
//
// export default observer(Scanner)
