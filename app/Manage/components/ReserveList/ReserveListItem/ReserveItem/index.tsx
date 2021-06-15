import React, {useState} from 'react';
import {ActivityIndicator, ToastAndroid, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import {RectButton} from "react-native-gesture-handler";
import {Colors} from "../../../../../ball-library/theme";
import {auth, H1, H2, H3} from "../../../../../ball-library";
import {changeSportSiteState} from "../../../../library/api";

interface IReserveCardItem {
    sportSessionId: string,
    time: {
        startsAt: string,
        endsAt: string
    },
    reserveId: string,

    // itemType: 'Reserved' | 'No Reserve' | 'No Reserve Locked';
    // itemType: 'Single' | 'Multi',
    status: boolean,

    capacity: number;
    reservesCount: number,

    reserveTitle: string,
    price: number,
    discount: number | null,
    limit: number,
    date: string,
    isValidDiscount: boolean | null,
}


const ReserveItem = (props: IReserveCardItem) => {

    const styles = styleGenerator();
    const {sportSessionId, capacity, status, reservesCount, price, reserveTitle} = props;


    // lock loading
    const [lockLoading, setLockLoading] = useState<boolean>(false);
    // lock sans
    const [isLocked, setLock] = useState(!status);


    let itemType: 'Single' | 'Multi' = capacity > 1 ? 'Multi' : 'Single';
    let sellType: 'Sold Out' | 'Not Sold' = reservesCount > 0 ? 'Sold Out' : 'Not Sold';
    let statusText = !isLocked ? 'فعال' : 'غیر فعال';


    const handleLockButton = async () => {
        setLockLoading(true);

        if (isLocked) {
            let res = await changeSportSiteState(auth.getToken(), sportSessionId, true);

            if (res.state === 'success') {
                ToastAndroid.show('با موفقیت باز شد', ToastAndroid.SHORT);
                setLock(false)
            } else {
                ToastAndroid.show('خطا لطفا دوباره امتحان کنید', ToastAndroid.SHORT);
            }

            setLockLoading(false);

        } else {
            let res = await changeSportSiteState(auth.getToken(), sportSessionId, false);

            if (res.state === 'success') {
                ToastAndroid.show('با موفقیت قفل شد', ToastAndroid.SHORT);
                setLock(true)
            } else {
                ToastAndroid.show('خطا لطفا دوباره امتحان کنید', ToastAndroid.SHORT);
            }

            setLockLoading(false);

        }
    };

    const renderLockButton = () => {
        return (
            <View style={[styles.reserve_button_single_container]}>
                <RectButton style={styles.reserve_button_single} onPress={handleLockButton}>
                    {!lockLoading &&
                    <H2>{isLocked ? 'باز کردن سانس' : 'قفل کردن سانس'}</H2>
                    }

                    {lockLoading &&
                    <ActivityIndicator color={Colors.primaryPurple} size={20}/>
                    }

                </RectButton>
            </View>
        )
    };


    if (itemType === 'Single') {
        if (sellType === 'Sold Out') {
            // sell out items
            return (
                <View style={[styles.container, {backgroundColor: Colors.greenBall}]}>
                    <H2 style={styles.white_text}>{reserveTitle}</H2>
                    <H2 style={styles.white_text}>{price} تومان</H2>
                    <H2 style={styles.white_text}>وضعیت : فروش رفته</H2>
                    {/*<H2 style={styles.white_text}>محمد رضا محمدی</H2>*/}
                </View>
            )
        } else {
            return (
                <View style={[styles.container, isLocked && {backgroundColor: Colors.redDiscount}]}>
                    <H2 style={[styles.white_text, !isLocked && {color: Colors.ballNewGray}]}>{reserveTitle}</H2>
                    <H2 style={[styles.white_text, !isLocked && {color: Colors.ballNewGray}]}>{price} تومان</H2>
                    <H2 style={[styles.white_text, !isLocked && {color: Colors.ballNewGray}]}>وضعیت : {statusText}</H2>
                    {renderLockButton()}
                </View>
            )
        }
    } else {
        // ItemType is Multi
        if (sellType === 'Sold Out') {
            // sell out items
            return (
                <View style={[styles.container, {backgroundColor: Colors.greenBall}]}>
                    <H2 style={styles.white_text}>{reserveTitle}</H2>
                    <H2 style={styles.white_text}>تعداد فروش : {reservesCount}</H2>
                    <H2 style={styles.white_text}>وضعیت : فعال</H2>
                </View>
            )
        } else {
            return (
                <View style={[styles.container, isLocked && {backgroundColor: Colors.redDiscount}]}>
                    <H2 style={[styles.white_text, !isLocked && {color: Colors.ballNewGray}]}>{reserveTitle}</H2>
                    <H2 style={[styles.white_text, !isLocked && {color: Colors.ballNewGray}]}>تعداد فروش : {reservesCount}</H2>
                    <H2 style={[styles.white_text, !isLocked && {color: Colors.ballNewGray}]}>وضعیت : {statusText}</H2>
                    {renderLockButton()}
                </View>
            )
        }
    }

};

export default observer(ReserveItem);


/*if (itemType === 'Reserved') {
    return (
        <View style={[styles.container, {backgroundColor: Colors.primaryPurple, paddingVertical: 18}]}>
            <H2 style={[{color: Colors.whiteBall}]}>تعداد فروش</H2>
            <View style={{alignItems: 'center'}}>
                <H2 style={{color: Colors.whiteBall}}>{reservesCount} عدد</H2>
            </View>
            <H1 style={styles.reserve_price}>
                {totalSell}<H3 style={[styles.reserve_price, {marginBottom: 8}]}> تومان</H3>
            </H1>
        </View>
    );
} else {
    return (
        <View style={[styles.container, isLocked && {backgroundColor: Colors.lockedSans}]}>
            <H2>تعداد فروش</H2>
            <View style={{alignItems: 'center'}}>
                <H3>{reservesCount}</H3>
                {/!*<H3>{sportSessionId}</H3>*!/}
            </View>
            <H1 style={styles.reserve_price}>{0}
                <H3 style={[styles.reserve_price]}> تومان</H3>
            </H1>
            {renderLockButton()}
        </View>
    );
}*/


/*
const renderLockButton2 = () => {
    return (
        <View
            style={[styles.reserve_button_single_container, isLocked && styles.reserve_button_single_container_selected]}>
            <RectButton style={styles.reserve_button_single} onPress={handleLockButton}>
                {!lockLoading &&
                <H2 style={[isLocked && {color: Colors.whiteBall}]}>
                    {isLocked ? 'باز کردن' : 'قفل کردن'}
                </H2>
                }

                {lockLoading &&
                <ActivityIndicator color={Colors.primaryPurple} size={20}/>
                }

            </RectButton>
        </View>
    )
};*/
