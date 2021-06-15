import React, {useState, useEffect, createRef} from 'react';
import {View, Text, Dimensions, ListRenderItem, ImageBackground} from 'react-native';
import {observer} from 'mobx-react-lite';
import Carousel from 'react-native-snap-carousel';
// styles
import styleGenerator from './styles';
// local
import {H1} from "../../../../../ball-library";
import {useDebounce} from "use-debounce";
import {transactionsStore} from "../../../../store/TransactionsStore";


const CarouselDay = () => {
    const styles = styleGenerator();
    const day_carousel = createRef<any>();

    // states
    const [debouncedDayIndex] = useDebounce<number>(transactionsStore.dayIndex, 500);

    useEffect( () => {
        transactionsStore.getAllTransactions()
    },[debouncedDayIndex]);


    useEffect(() => {
        let timer = setTimeout(() => {
            day_carousel.current.snapToItem(transactionsStore.dayIndex, true)
        }, 1000);

        return () => {
            clearTimeout(timer)
        }

    }, []);

    const handleChangeDay = async (slideIndex: number) => {
        await transactionsStore.setDayIndex(slideIndex);
    };

    const renderItem: ListRenderItem<number> = ({item}) => {
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
                data={transactionsStore.days}
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
