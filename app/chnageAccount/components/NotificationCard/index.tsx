import React from 'react';
import {ToastAndroid, View} from 'react-native';
import {observer} from 'mobx-react-lite';
// styles
import styleGenerator from './styles';
import {Colors, H2, Icon, SportIcon, userProfile} from '../../../ball-library';

// types
import {RectButton} from "react-native-gesture-handler";


interface ISportSiteCard {
    sportSiteID:string,
    sportSiteName:string,
}

const SportSiteCard = (props: ISportSiteCard) => {
    const {sportSiteID, sportSiteName} = props;
    const {styles, icon} = styleGenerator();


    const handleChangeSportSite = () => {
        userProfile.setCurrentSportSite(sportSiteID);
        ToastAndroid.show('با موفقیت تغییر کرد',ToastAndroid.SHORT)
    };


    return (
        <View style={styles.parent_container}>
            <RectButton style={styles.container} onPress={handleChangeSportSite}>

                <H2 style={{color:Colors.whiteBall}}>{sportSiteName}</H2>

            </RectButton>
        </View>
    );
};

export default observer(SportSiteCard);


/*
<View style={styles.right_section}>
    <SportIcon sportType={'sport-complex'} size={IconSize.type_1} color={icon.color}/>
    <H2 numberOfLines={1} style={styles.message_text}>{message}</H2>
</View>

<View style={styles.left_section}>
    <H2 style={styles.date}>{date}</H2>
<Icon type={'ion'} name={'ios-arrow-back'} size={IconSize.type_1} color={Colors.titleBarLines}/>
</View>
*/
