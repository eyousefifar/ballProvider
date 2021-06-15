import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
//local
import TitleBar from "./TitleBar";
import CarouselMonth from './DateCarousel/CarouselMonth'
import CarouselDay from './DateCarousel/CarouselDay'

const FilterSection = () => {
	const styles = styleGenerator();

	return (
		<View style={{paddingHorizontal:12}}>
			<View style={styles.container}>
				<TitleBar title={'تاریخ'} />
				<CarouselMonth />
				<CarouselDay />
			</View>
		</View>
	);
};

export default observer(FilterSection);
