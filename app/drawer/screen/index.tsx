import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Provider} from 'react-native-paper';
import {Separator, defaultTheme, auth, screens} from '../../ball-library';
import {observer} from 'mobx-react-lite';
// styles
import styles from './styles';
// local
import Header from '../components/Header';
import MenuItem from '../components/MenuItem';
import Communications from '../components/Communications';
import {showAboutUs, showSupport, showLogout, showFAQ, showChangeAccount} from '../library/nav';
import {IDrawerItem} from "../store/types";
import {IReserveItem, Notif} from "../library/types";
import {getLastNotifications, getLastReserves} from "../library/api";

const doNothing = async () => {

};

const Drawer = () => {
    const [lastReserves, setLastReserves] = useState<Array<IReserveItem>>([]);
    const [lastNotifications, setLastNotifications] = useState<Array<Notif>>([]);

    const firstLaunch = async () => {
        getLastReserves(auth.getToken()).then(res => res.state === 'success' ? setLastReserves(res.reserves) : null);
        getLastNotifications(auth.getToken()).then(res => res.state === 'success' ? setLastNotifications(res.notifications) : null);
    };


    useEffect(() => {
        firstLaunch()
    }, []);

    const drawerItems: Array<IDrawerItem> = [
        {
            id: screens.support.id,
            title: 'پشتیبانی',
            onPress: () => showSupport(),
            type: 'plain',
        },
        /*{
            id: screens.chnageAccount.id,
            title: 'اعلان ها',
            onPress: () => doNothing(),
            type: auth.isAuthorized ? 'chnageAccount' : 'plain',
            lastNotifications: lastNotifications
        },*/
        {
            id: screens.aboutUs.id,
            title: 'درباره ما',
            onPress: () => showAboutUs(),
            type: 'plain',
        },
        {
            id: screens.FAQ.id,
            title: 'سوالات متداول',
            onPress: () => showFAQ(),
            type: 'plain',
        },
      /*  {
            id: screens.changeAccount.id,
            title: 'تغییر حساب کاربری',
            onPress: () => showChangeAccount(),
            type:  'plain',
        },*/
        {
            id: screens.logout.id,
            title: 'خروج از حساب کاربری',
            onPress: () => showLogout(),
            type: auth.isAuthorized ? 'plain' : 'empty',
        }
    ];
    const drawerItemsLength = drawerItems.length;


    const renderItem = (item: IDrawerItem, index: number) => {
        // if (drawerItemsLength !== index){
        //     console.warn('I Called')
        // }
        if (item.type !== 'empty') {
            return (
                <View key={item.id}>
                    <MenuItem
                        id={item.id}
                        title={item.title}
                        onPress={item.onPress}
                        type={item.type}
                        lastReserves={lastReserves}
                        lastNotifications={lastNotifications}
                    />
                    {index !== drawerItemsLength && <Separator/>}
                </View>
            );
        } else return null;
    };

    return (
        <Provider theme={defaultTheme}>
            <View style={styles.container}>
                <Header/>
                <ScrollView style={{flex: 1}}>
                    {drawerItems.map(renderItem)}
                </ScrollView>
                <Communications/>
            </View>
        </Provider>
    );
};

export default observer(Drawer);
