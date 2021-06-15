import React, {useEffect, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {Provider} from 'react-native-paper';
import {observer} from 'mobx-react';
import { useNavigationComponentDidAppear } from 'react-native-navigation-hooks'

// local
import {Colors, defaultTheme, Loading, screens, userProfile} from '../../ball-library';
import IncreaseCard from "../components/IncreaseCard";
import TitleBar from "../components/FilterSection/TitleBar";
import ShowAllButton from "../components/ShowAllButton";
import {walletStore} from "../store/WalletStore";
import styleGenerator from './styles';
import TransactionsList from "../components/WalletTransactions";
import Menu from "../components/Menu";
import {toggleDrawer} from "../library/nav";


const Wallet = () => {
    const styles = styleGenerator();

    const [refreshing, setRefreshing] = useState<boolean>(false);

    const firstLaunch = async () => {
        await userProfile.getAllUserInfo();

        // refresh customer token
        await userProfile.refreshCustomerToken();
    };

    useEffect( () => {
        firstLaunch()
    }, []);

    const handler = React.useCallback(
        async e => {
            if (walletStore.sportSiteId !== userProfile.currentSportSiteId || walletStore.sportSiteId === ''){
                console.warn('I Called !!!');

                await walletStore.setSportSiteId(userProfile.currentSportSiteId);
                await walletStore.getAllTransactions()
            }

        },
        [userProfile.currentSportSiteId]
    );

    useNavigationComponentDidAppear(handler, screens.wallet.id);


    const handleRefresh = async () => {
        setRefreshing(true);

        await walletStore.setSportSiteId(userProfile.currentSportSiteId);
        // get All Data again
        await walletStore.getAllTransactions();
        setRefreshing(false);
    };

    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={walletStore.loading} screenId={screens.wallet.id}>
                <View style={{flex: 1}}>
                    <ScrollView style={styles.container}
                                refreshControl={
                                    <RefreshControl
                                        refreshing={refreshing}
                                        onRefresh={handleRefresh}
                                        colors={[Colors.primaryPurple]}
                                    />
                                }>
                        <Menu onIconPress={toggleDrawer}/>
                        <IncreaseCard amount={walletStore.amount} totalIncome={walletStore.totalIncome}/>
                        <TitleBar title={'رزرو ها'}/>
                        <View style={{flex: 1}}>
                            <TransactionsList transactions={walletStore.transactions}/>
                        </View>
                    </ScrollView>
                    <ShowAllButton  sportId={walletStore.sportSiteId}/>
                </View>
            </Loading>
        </Provider>
    );

};

export default observer(Wallet);
