import React, {useEffect} from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import TitleBar from "./TitleBar";
import CarouselMonth from './DateCarousel/CarouselMonth'
import CarouselDay from './DateCarousel/CarouselDay'
import {sportReservationStore} from "../../store/SportReservationStore";

const FilterSection = () => {
    const styles = styleGenerator();


    return (
        <View style={styles.parent}>
            <View style={styles.container}>
                <TitleBar title={'تاریخ'} type={'H2'}/>
                <CarouselMonth/>
                <CarouselDay/>
            </View>
        </View>

    );
};

export default observer(FilterSection);
