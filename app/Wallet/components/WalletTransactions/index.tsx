import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItem, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import {Colors} from "../../../ball-library/theme";
import {H2} from "../../../ball-library";
import {walletStore} from "../../store/WalletStore";
import TransactionItem from "./Transaction";
import {WalletTransactions}  from '../../library/types'


interface ITransactionsList {
    transactions: Array<WalletTransactions>,
}


const TransactionsList = (props: ITransactionsList) => {

    const styles = styleGenerator();
    const {transactions} = props;


    const renderTransactionFlatList: ListRenderItem<WalletTransactions> = ({item}) => {

        // TODO => get day name

        return (
            <TransactionItem name={item.reserve.user.name} startTime={item.session.sessionTime.startTime}
                             date={item.session.date} endTime={item.session.sessionTime.endTime} count={item.count}
                             sportName={item.session.qualityType} day={'سه شنبه'}
            />
        )
    };

    if (walletStore.miniLoading) {
        return (
            <View style={styles.empty_box}>
                <ActivityIndicator size={'large'} color={Colors.primaryPurple}/>
            </View>
        );
    } else
        return (
            <View style={{flex: 1}}>
                {
                    transactions.length !== 0 &&
                    <FlatList
                        data={transactions}
                        keyExtractor={(value, index) => index.toString()}
                        renderItem={renderTransactionFlatList}
                        style={{width: '100%', marginBottom: 60}}
                    />
                }
                {
                    transactions.length === 0 &&
                    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                        <View style={styles.not_found_box}>
                            <H2>موردی یافت نشد !</H2>
                        </View>
                    </View>
                }
            </View>
        );
};

export default observer(TransactionsList);
