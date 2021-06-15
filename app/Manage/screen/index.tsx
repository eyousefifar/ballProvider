import React, {useEffect, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import {Colors, defaultTheme} from "../../ball-library/theme";
import {Icon, screens, timeClass, userProfile} from "../../ball-library";
import {Provider} from "react-native-paper";
import FilterSection from "../components/FilterSection";
import TitleBar from "./../components/FilterSection/TitleBar";
import ReserveList from "../components/ReserveList";
import {sportReservationStore} from '../store/SportReservationStore'
import Loading from "../../ball-library/Loading";
import {useNavigationComponentDidAppear} from "react-native-navigation-hooks";
import {RectButton} from "react-native-gesture-handler";
import {toggleDrawer} from "../library/nav";
import Menu from "../components/Menu";


const ManageSports = () => {

    const styles = styleGenerator();

    const [refreshing, setRefreshing] = useState<boolean>(false);

    const getTimeAgain = async () => {
        if (timeClass.currentDay === 0 || timeClass.currentMonth === 0) {
            // console.warn('getTimeAgain Called !!');
            await timeClass.getTimeAndDate()
        }
    };

    const firstLaunch = async () => {
        await getTimeAgain();
        // await timeClass.getTimeAndDate();

        await sportReservationStore.setSportId(userProfile.currentSportSiteId);
        await sportReservationStore.setInitialDayAndMonth();
        await sportReservationStore.getAllReserveList();
    };

    useEffect( () => {
        firstLaunch()
    }, []);

    const handler = React.useCallback(
        async e => {
            if (sportReservationStore.sportId !== userProfile.currentSportSiteId || sportReservationStore.sportId === ''){
                console.warn('I Called On Manage Page !!!');
                // check the time
                await getTimeAgain();

                await sportReservationStore.setSportId(userProfile.currentSportSiteId);
                await sportReservationStore.getAllReserveList()
            }
        },
        [userProfile.currentSportSiteId]
    );

    useNavigationComponentDidAppear(handler, screens.manage.id);


    const handleRefresh = async () => {
        setRefreshing(true);

        // TODO : Change this one

        await getTimeAgain();
        await sportReservationStore.setSportId(userProfile.currentSportSiteId);
        // await sportReservationStore.getAllReserveList();

        setRefreshing(false);
    };


    return (
        <Provider theme={defaultTheme}>
            <View style={{flex: 1}}>
                <Loading dark={true} loaded={sportReservationStore.loading} screenId={screens.manage.id}>
                    <View style={styles.container}>
                        <ScrollView
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={handleRefresh}
                                    colors={[Colors.primaryPurple]}
                                />
                            }>

                            <Menu onIconPress={toggleDrawer} />

                            <FilterSection/>
                            <View style={{width: '100%', paddingHorizontal: 12, marginBottom: 6}}>
                                <TitleBar title={'سانس ها'} type={'H1'}/>
                            </View>
                            <ReserveList reserveList={sportReservationStore.sansesList}
                                         isEmpty={sportReservationStore.isEmptyReserve}/>
                        </ScrollView>
                    </View>
                </Loading>
            </View>
        </Provider>
    );
};


export default observer(ManageSports);

