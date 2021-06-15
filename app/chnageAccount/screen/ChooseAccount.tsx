import React, {useEffect} from 'react';
import {ImageBackground, ListRenderItem, View} from 'react-native';
import {Provider} from 'react-native-paper';
import {Colors, defaultTheme, H1, Header, ScrollHeaderPadding} from '../../ball-library';
import {observer} from 'mobx-react';
// local
import TitleBar from "../../Wallet/components/FilterSection/TitleBar";
import {SportSiteData} from "../library/types";
import {FlatList} from "react-native-gesture-handler";
import {dismissChooseAccountScreen} from "../library/nav";
import SportSiteCardLogin from "../components/NotificationCardLogin";

interface IChooseAccount {
    sportSites: Array<SportSiteData>
}

const ChooseAccount = (props: IChooseAccount) => {

    const {sportSites} = props;


    useEffect(() => {
        // firstLaunch()
    }, []);


    const renderSportSite: ListRenderItem<SportSiteData> = ({item}) => {

        return (
            <SportSiteCardLogin sportSiteID={item.uuid} sportSiteName={item.name}/>
        );
    };


    return (
        <Provider theme={defaultTheme}>
            <ImageBackground source={require('../../../assets/images/auth.jpg')} style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <Header
                        title={'انتخاب حساب کاربری'}
                        backgroundColor={'primary'}
                        drawBehind
                        mode={'fullWidth'}
                        onPress={dismissChooseAccountScreen}
                    />
                    <ScrollHeaderPadding/>

                    {sportSites.length !== 0 &&
                    <View style={{width: '100%', paddingHorizontal: 12, marginBottom: 12}}>
                        <TitleBar title={'حساب مجموعه خود را انتخاب کنید'} lineColor={Colors.whiteBall}
                                  titleColor={Colors.whiteBall}/>
                    </View>
                    }


                    {sportSites.length !== 0 &&
                    <FlatList data={sportSites} renderItem={renderSportSite} style={{flex: 1}}/>
                    }

                    {sportSites.length === 0 &&
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                        <H1 style={{color:Colors.whiteBall}}>متاسفانه شما هنوز هیچ سایت ورزشی در بال ثبت نکرده اید</H1>
                    </View>
                    }


                </View>
            </ImageBackground>
        </Provider>
    );
};

export default observer(ChooseAccount);
