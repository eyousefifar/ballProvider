import React, {useEffect, useState, createRef} from 'react';
import {View, Text, Dimensions, ListRenderItem, ImageBackground, Animated} from 'react-native';
import {observer} from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
// styles
import styleGenerator from './styles';
// local
import {sportReservationStore} from "../../../../store/SportReservationStore";
import {H1, H2} from "../../../../../ball-library";
import {useDebounce} from "use-debounce";
import {generateMonthDaysArray, getJDayInMonth} from "../../../../../ball-library/Calendar/DateCarousel/util";

interface IMonthCarousel {
    id: number,
    month: string
}

const CarouselMonth = () => {

    const styles = styleGenerator();


    // ref
    const month_carousel: any = createRef<any>();


    const [debouncedMonthIndex] = useDebounce<number>(sportReservationStore.monthIndex, 500);

    // console.warn('DebouncedMonthIndex : ',debouncedMonthIndex);

    useEffect( () => {
        sportReservationStore.getAllReserveList()
    },[debouncedMonthIndex]);

    const handleChangeMonth = async (slideIndex: number) => {
        await sportReservationStore.setMonthIndex(slideIndex);
        await sportReservationStore.setDays()


        // await sportReservationStore.getAllReserveList();
    };


    const renderItem: ListRenderItem<string> = ({item}) => {
        return (
            <View style={styles.month_carousel_container}>
                <H1 style={styles.month_carousel_text}>{item}</H1>
            </View>
        );
    };


    const {width} = Dimensions.get('window');
    const slider_width = width - 32;

    return (
        <View style={{alignItems: 'center', marginTop: 4}}>
            <Carousel
                ref={month_carousel}
                data={sportReservationStore.months}
                renderItem={renderItem}
                inverted={true}
                enableMomentum={true}
                activeSlideAlignment={'center'}
                inactiveSlideOpacity={0.6}
                inactiveSlideScale={0.8}
                itemWidth={80}
                itemHeight={35}
                sliderWidth={slider_width}
                sliderHeight={35}
                containerCustomStyle={styles.slider_container}
                onBeforeSnapToItem={handleChangeMonth}
            />
        </View>
    );
};

export default observer(CarouselMonth);
