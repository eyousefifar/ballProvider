import React, {createRef, useEffect, useState} from 'react';
import {View, Dimensions, ListRenderItem} from 'react-native';
import {observer} from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
// styles
import styleGenerator from './styles';
// local
import {H1} from "../../../../../ball-library";
import {useDebounce} from "use-debounce";
import {transactionsStore} from "../../../../store/TransactionsStore";


interface IMonthCarousel {
    id: number,
    month: string
}

const CarouselMonth = () => {

    const styles = styleGenerator();
    const [debouncedMonthIndex] = useDebounce<number>(transactionsStore.monthIndex, 500);

    // console.warn('DebouncedMonthIndex : ',debouncedMonthIndex);

    useEffect( () => {
        transactionsStore.getAllTransactions();
    },[debouncedMonthIndex]);

    const handleChangeMonth = async (slideIndex: number) => {
        await transactionsStore.setMonthIndex(slideIndex);
        await transactionsStore.setDays()
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
                data={transactionsStore.months}
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
