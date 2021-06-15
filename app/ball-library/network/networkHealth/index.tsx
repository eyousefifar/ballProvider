import NetInfo from "@react-native-community/netinfo";
import {action, decorate, observable} from "mobx";


class Connectivity {
    // observables
    isConnected: boolean = true;


    subscribe = NetInfo.addEventListener(async state => {
        // console.warn("Connection type", state.type);
        // console.warn("Is connected?", state.isConnected);
        // console.log("Is connected?", state.isConnected);

        this.isConnected = state.isConnected;

        // if (!state.isConnected) {
        //     ToastAndroid.show('You are offline my Darling', ToastAndroid.LONG);
        //
        //     await showModal({
        //         ...screens.noConnection,
        //         passProps: {
        //             mode: 'server'
        //         }
        //     });
        // }


    });

}

decorate(Connectivity, {
    // observables
    isConnected:observable,

    // actions
    subscribe:action
});

const connectivity = new Connectivity();

export default connectivity;
