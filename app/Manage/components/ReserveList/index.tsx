import React from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import ReserveListItem from "./ReserveListItem";
import {SansList} from "../../library/types";
import {sportReservationStore} from "../../store/SportReservationStore";
import {Colors} from "../../../ball-library/theme";
import {H2} from "../../../ball-library";


interface IReserveList {
    reserveList: Array<SansList>,
    isEmpty: boolean
}

const ReserveList = (props: IReserveList) => {

    const styles = styleGenerator();
    const {reserveList, isEmpty} = props;

    if (isEmpty && !sportReservationStore.miniLoading) {
        return (
            <View style={styles.parent_empty_box}>
                <View style={styles.empty_box}>
                    <H2>موردی یافت نشد !</H2>
                </View>
            </View>
        )
    } else {
        if (sportReservationStore.miniLoading)
            return (<ActivityIndicator size={'large'} color={Colors.primaryPurple}/>);
        else
            return (
                <ScrollView style={{marginBottom: 50}}>
                    {reserveList.map((data, index) => {
                        return (
                            <View key={index} style={styles.reserve_list}>
                                <ReserveListItem startTime={data.startTime} endTime={data.endTime}
                                                 sanses={data.sessions} index={index}/>
                            </View>
                        );
                    })
                    }
                </ScrollView>
            )
    }
};

export default observer(ReserveList);
