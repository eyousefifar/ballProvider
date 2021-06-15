import {action, computed, decorate, observable} from "mobx";
import {getSportSitesID} from "../library/api";
import {auth, userProfile} from "../../ball-library";
import {ToastAndroid} from "react-native";
import {SportSiteData} from "../library/types";

class DrawerChangeAccountStore {

    // observables
    loading : boolean = false;
    miniLoading : boolean = false;

    sportSites: Array<SportSiteData> = [];



    // computed
    get isEmptySportSites () : boolean {
        return this.sportSites.length === 0 ;
    }


    // actions

    getDataFromNet = async () => {

        this.miniLoading = true;
        this.sportSites = [];


        let res = await getSportSitesID(auth.getToken());

        if (res.state === 'success') {
            this.sportSites = res.sportSitesData;

            this.loading = true;
            this.miniLoading = false;


        } else {
            ToastAndroid.show(res.message, ToastAndroid.SHORT);

            this.loading = true;
            this.miniLoading = false;
        }
    };

    changeSportSite = async (sportSiteID : string) => {
        userProfile.setCurrentSportSite(sportSiteID);



        // ToastAndroid.show('با موفقیت تغییر کرد',ToastAndroid.SHORT)
    }



}

decorate(DrawerChangeAccountStore,{
    // observables
    loading :observable,
    miniLoading :observable,
    sportSites :observable,

    // computed
    isEmptySportSites:computed,

    // actions
    getDataFromNet:action,

});

const drawerChangeAccountStore = new DrawerChangeAccountStore();
export default drawerChangeAccountStore;
