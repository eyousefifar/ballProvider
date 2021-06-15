import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ImageBackground, RefreshControl, ToastAndroid, View} from 'react-native';
import {Provider} from 'react-native-paper';
import {RecyclerListView, LayoutProvider, DataProvider} from 'recyclerlistview';
import {Header, Colors, defaultTheme, ScrollHeaderPadding, auth, screens} from '../../ball-library';
import {observer} from 'mobx-react';
// local
import {EmptyCard} from '../../ball-library';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {dismissChangeAccountScreen} from '../library/nav';
import Loading from "../../ball-library/Loading";
import TitleBar from "../../Wallet/components/FilterSection/TitleBar";
import {SportSiteData} from "../library/types";
import {getSportSitesID} from "../library/api";
import SportSiteCard from "../components/NotificationCard";
import drawerChangeAccountStore from "../store/DrawerChangeAccountStore";


const ChangeAccount = () => {

    const [refreshing, setRefreshing] = useState<boolean>(false);


    const firstLaunch = async () => {
        await drawerChangeAccountStore.getDataFromNet();
    };

    useEffect(() => {
        firstLaunch()
    }, []);


    const layout = new LayoutProvider(
        index => 0,
        (type, dim) => {
            dim.width = widthPercentageToDP('100%');
            dim.height = 75;
        },
    );
    const dataProvider = new DataProvider((r1, r2) => {
        return r1 !== r2;
    });


    const rowRenderer = (type: any, data: SportSiteData) => {

        return (
            <SportSiteCard sportSiteID={data.uuid} sportSiteName={data.name}/>
        );
    };

    const handleRefresh = async () => {
        setRefreshing(true);

        await drawerChangeAccountStore.getDataFromNet();
        setRefreshing(false);
    };

    console.warn('Items length : ', drawerChangeAccountStore.sportSites.length)


    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={drawerChangeAccountStore.loading} screenId={screens.changeAccount.id}>
                <ImageBackground source={require('../../../assets/images/auth.jpg')} style={{flex: 1}}>
                    <Header
                        title={'تغییر حساب کاربری'}
                        backgroundColor={'primary'}
                        drawBehind
                        mode={'fullWidth'}
                        onPress={dismissChangeAccountScreen}
                    />
                    <View style={{flex: 1}}>
                        <ScrollHeaderPadding/>

                        <View style={{width: '100%', paddingHorizontal: 12, marginBottom: 12}}>
                            <TitleBar title={'حساب مجموعه خود را انتخاب کنید'} lineColor={Colors.whiteBall}
                                      titleColor={Colors.whiteBall}/>
                        </View>

                        {
                            drawerChangeAccountStore.isEmptySportSites &&
                            drawerChangeAccountStore.miniLoading &&
                            <View style={{flex: 1,}}>
                                <ActivityIndicator size={'large'} color={Colors.primaryPurple}/>
                            </View>
                        }
                        {!drawerChangeAccountStore.isEmptySportSites && !drawerChangeAccountStore.miniLoading && (
                            <RecyclerListView
                                layoutProvider={layout}
                                dataProvider={dataProvider.cloneWithRows(drawerChangeAccountStore.sportSites)}
                                rowRenderer={rowRenderer}
                                scrollViewProps={{
                                    contentContainerStyle: {},
                                    style: {flex: 1},
                                }}
                                onEndReachedThreshold={0.3}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={handleRefresh}
                                        colors={[Colors.primaryPurple]}
                                    />
                                }
                            />
                        )}
                        {drawerChangeAccountStore.isEmptySportSites && !drawerChangeAccountStore.miniLoading && (
                            <EmptyCard
                                mode={'thin'}
                                text={'هنوز مجموعه ای نساخته اید!'}
                                transparent={true}
                            />
                        )}
                    </View>
                </ImageBackground>
            </Loading>
        </Provider>
    );
};

export default observer(ChangeAccount);
