import React from 'react';
import {ScrollView, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import ReserveItem from "./ReserveItem";
import {Sans} from "../../../library/types";
import {Colors, H2} from "../../../../ball-library";


interface IReservationList {
    startTime: string,
    endTime: string,
    sanses: Array<Sans>
    index: number
}

const ReserveListItem = (props: IReservationList) => {

    const styles = styleGenerator();
    const {startTime, endTime, sanses, index} = props;
    const backgroundColor = (index % 2 !== 0) ? Colors.homeTitleBar : Colors.whiteBall;

    const formatTime = (time: string): string => {
        const times = time.split(':');
        return `${times[0]}:${times[1]}`;
    };


    return (
        <View style={[styles.reserve_container, {backgroundColor}]}>

            <View style={styles.reserve_title_box}>
                <H2>{formatTime(startTime)}</H2>
                <H2>الی</H2>
                <H2>{formatTime(endTime)}</H2>
            </View>

            <ScrollView style={styles.reserve_list} horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    // item type has 3 type 1-Reserved   2-No reserve   3-No reserve with lock
                    sanses.map((data, index) => {
                        // let itemType = data.reservesCount > 0 ? 'Reserved' : ((data.enableStatus) ? 'No Reserve' : 'No Reserve Locked');
                        return (
                            <ReserveItem discount={data.discountPrecent} price={data.price} key={index}
                                         isValidDiscount={data.isValidDiscount} limit={data.reserveLimit}
                                         reservesCount={data.reservesCount} sportSessionId={data.uuid}
                                         status={data.enableStatus} capacity={data.capacity}
                                         date={data.date} reserveTitle={data.sportType}
                                         reserveId={data.uuid} time={{startsAt: startTime, endsAt: endTime}}/>
                        );
                    })
                }
            </ScrollView>

        </View>
    );


};

export default observer(ReserveListItem);
