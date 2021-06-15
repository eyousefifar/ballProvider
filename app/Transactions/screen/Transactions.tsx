import React, {useEffect, useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';
import {observer} from 'mobx-react';
// local
import {Colors, defaultTheme} from "../../ball-library/theme";
import {Header, screens, ScrollHeaderPadding, timeClass, TitleBar} from "../../ball-library";
import {dismissTransactionScreen} from "../library/nav";
import TransactionsList from "../components/TransactionsList";
import {Provider} from "react-native-paper";
import FilterSection from "../components/FilterSection";
import Loading from "../../ball-library/Loading";
import {transactionsStore} from "../store/TransactionsStore";
import SearchBar from "../components/SearchBar";

interface ITransactions {
    sportId: string
}

const Transactions = (props: ITransactions) => {

    // const styles = styleGenerator();
    const {sportId} = props;

    const [refreshing, setRefreshing] = useState<boolean>(false);

    const getTimeAgain = async () => {
        if (timeClass.currentDay === 0 || timeClass.currentMonth === 0) {
            // console.warn('getTimeAgain Called !!');
            await timeClass.getTimeAndDate()
        }
    };


    const firstLaunch = async () => {
        // await transactionsStore.setSportSiteId(sportId);
        await getTimeAgain();
        await transactionsStore.setSportSiteId(sportId);
        // await getTimeAgain();
        await transactionsStore.setInitialDayAndMonth();
        await transactionsStore.getAllTransactions();
    };


    useEffect(() => {
        firstLaunch()
    }, []);

    const handleRefresh = async () => {
        setRefreshing(true);
        await getTimeAgain();
        await transactionsStore.getAllTransactions();
        setRefreshing(false);
    };



    return (
        <Provider theme={defaultTheme}>
            <Loading dark={true} loaded={true} screenId={screens.walletTransactions.id}>
                <View style={{flex: 1}}>
                    <Header
                        title={'تراکنش ها'}
                        mode={'fullWidth'}
                        drawBehind
                        onPress={dismissTransactionScreen}
                    />
                    <ScrollView style={{flex: 1}} refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={handleRefresh}
                            colors={[Colors.primaryPurple]}
                        />
                    }>
                        <ScrollHeaderPadding/>
                        <SearchBar searchText={'جستجو ...'} />
                        <FilterSection/>
                        <View style={{paddingHorizontal:12}}>
                            <TitleBar title={'لیست تراکنش ها'} />
                        </View>
                        <TransactionsList transactions={transactionsStore.getTransactions} />
                    </ScrollView>
                </View>
            </Loading>
        </Provider>


    );
};

export default observer(Transactions);
