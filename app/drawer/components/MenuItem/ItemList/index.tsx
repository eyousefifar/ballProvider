import React from 'react';
import {View, ScrollView} from 'react-native';
import {observer} from 'mobx-react';
// local
// styles
import styleGenerator from './styles';
import NotificationItem from "./NotificationItem";
import {IReserveItem, Notif} from "../../../library/types";
import ReserveItem from './ReserveItem'
import moment from "moment-jalaali";


// types.ts
interface ItemList {
    type: 'plain' | 'empty' | 'reserves' | 'notifications',
    lastReserves?: Array<IReserveItem>,
    lastNotifications?: Array<Notif>,
}

const ItemList = (props: ItemList) => {
    const styles = styleGenerator();
    const {type, lastReserves, lastNotifications} = props;
    return (
        <View style={styles.container}>
            {type === 'reserves' &&
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 20}}>
                {
                    lastReserves?.map((data, index) => {

                        const persianDate = moment(data.session.date).format('jYYYY-jM-jD');
                        const times = data.session.sessionTime.startTime.split(':');
                        const newTime = `${times[0]}:${times[1]}`;

                        return (
                            <ReserveItem key={data.uuid} name={data.reserve.sportSite.name} time={newTime}
                                         date={persianDate} icon_name={'sport-complex'}/>
                        )
                    })
                }
            </ScrollView>
            }
            {type === 'notifications' &&
            <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom: 20}}>
                {
                    lastNotifications?.map((data: Notif, index) => {
                        return (
                            <NotificationItem key={index} icon_name={'sport-complex'} message={data.content}/>
                        )
                    })
                }
            </ScrollView>
            }

        </View>
    );
};

export default observer(ItemList);
