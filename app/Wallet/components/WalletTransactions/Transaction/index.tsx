import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styleGenerator from './styles';

import {observer} from 'mobx-react';
import moment, {weekdays} from "moment-jalaali";
import {Colors, H2} from "../../../../ball-library";


interface Transaction {
    name: string,
    sportName: string,

    startTime: string,
    endTime: string,

    date: string,
    count: number
}

const TransactionItem = (props: Transaction) => {

    const styles = styleGenerator();
    const {name, sportName, startTime, endTime, date, count} = props;

    let persianDate = moment(date).format('jYYYY/jM/jD'); // 1398/11/4

    const formatTime = (time: string): string => {
        const times = time.split(':');
        return `${times[0]}:${times[1]}`;
    };

    const getDay = (date: string) => {

        let d = moment(date);
        return weekdays(d.day())

    };


    return (
        <View style={styles.container}>
            <View style={styles.row1}>
                <View style={{flex:1}}>
                    <H2>{name}</H2>
                </View>

                <View style={{flexShrink:1}}>
                    <H2>{count} نفر {sportName}</H2>
                </View>

                <View style={{flex:1,alignItems:'flex-start'}}>
                    <H2>{getDay(date)}</H2>
                </View>

            </View>


            <View style={styles.row2}>
                <H2>{formatTime(startTime)} - {formatTime(endTime)}</H2>
                <H2>{persianDate}</H2>
            </View>

            <View style={{width:'100%',height:StyleSheet.hairlineWidth,backgroundColor:Colors.primaryPurple,marginTop:12}} />
        </View>
    );
};


export default observer(TransactionItem);
