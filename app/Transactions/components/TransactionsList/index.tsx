import React from 'react';
import {ActivityIndicator, Dimensions, FlatList, ListRenderItem, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import TransactionItem from './Transaction'
import {Transactions} from "../../library/types";
import moment from "moment-jalaali";
import {Colors} from "../../../ball-library/theme";
import {DataProvider, LayoutProvider, RecyclerListView} from "recyclerlistview";
import {H2} from "../../../ball-library";
import {transactionsStore} from "../../store/TransactionsStore";


interface ITransactionsList {
    transactions: Array<Transactions>,
}


const TransactionsList = (props: ITransactionsList) => {

    const styles = styleGenerator();
    const {transactions} = props;

    const handlePagination = async () => {
        // await transactionsStore.loadMore()
    };

    const handleFooterLoading = () => {
        if (!transactionsStore.neverLoadAgain) {
            return (<ActivityIndicator size={'large'} color={Colors.primaryPurple}/>)
        }
    };


    const renderTransactionFlatList: ListRenderItem<Transactions> = ({item}) => {
        return (
            <TransactionItem name={item.reserve.user.name} startTime={item.session.sessionTime.startTime}
                             date={item.session.date} endTime={item.session.sessionTime.endTime} count={item.count}
                             sportName={item.session.qualityType}
            />
        )
    };

    if (transactionsStore.miniLoading) {
        return (
            <View style={styles.empty_box}>
                <ActivityIndicator size={'large'} color={Colors.primaryPurple}/>
            </View>
        );
    } else
        return (
            <View style={{flex: 1,paddingHorizontal:12}}>
                {
                    transactions.length !== 0 &&

                    <FlatList
                        data={transactions}
                        keyExtractor={(value, index) => index.toString()}
                        renderItem={renderTransactionFlatList}
                        style={{width: '100%', marginBottom: 12}}
                        onEndReached={handlePagination}
                        onEndReachedThreshold={0.3}
                        renderFooter={handleFooterLoading}
                    />
                }
                {
                    transactions.length === 0 &&
                    <View style={styles.not_found_box_container}>
                        <View style={styles.not_found_box}>
                            <H2>موردی یافت نشد !</H2>
                        </View>
                    </View>
                }
            </View>
        );
};

export default observer(TransactionsList);
