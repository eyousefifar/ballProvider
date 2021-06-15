import React, {useState, useEffect, createRef} from 'react';
import {View, Text, Dimensions, ListRenderItem, ImageBackground} from 'react-native';
import {observer} from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
import moment from "moment-jalaali";
// styles
import styleGenerator from './styles';
// local
import {sportReservationStore} from "../../../../store/SportReservationStore";
import {H1} from "../../../../../ball-library";
import {useDebounce} from "use-debounce";
import {generateMonthDaysArray, getJDayInMonth} from "../../../../../ball-library/Calendar/DateCarousel/util";

interface IDayCarousel {
    id: number,
    day: number,
}

const CarouselDay = () => {
    const styles = styleGenerator();
    const day_carousel = createRef<any>();

    const [debouncedDayIndex] = useDebounce<number>(sportReservationStore.dayIndex, 500);

    // console.warn('DebouncedDayIndex : ',debouncedDayIndex);

    useEffect( () => {
        sportReservationStore.getAllReserveList()
    },[debouncedDayIndex]);

    useEffect(() => {
        let timer = setTimeout(() => {
            day_carousel.current.snapToItem(sportReservationStore.dayIndex, true)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }

    }, []);


    const handleChangeDay = async (slideIndex: number) => {
        await sportReservationStore.setDayIndex(slideIndex);
        // await sportReservationStore.getAllReserveList();
    };


    const renderItem : ListRenderItem<number> = ({item}) => {
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
                ref={day_carousel}
                data={sportReservationStore.days}
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
                onBeforeSnapToItem={handleChangeDay}
            />
        </View>
    );
};

export default observer(CarouselDay);
