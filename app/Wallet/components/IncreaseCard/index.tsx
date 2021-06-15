import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from 'react-native-gesture-handler'
// styles
import styleGenerator from './styles';
import {showIncreaseCashOverlay} from "../../library/nav";
import {H1} from "../../../ball-library";

interface IIncreaseCard {
	amount:number,
	totalIncome:number
}

const IncreaseCard = (props:IIncreaseCard) => {

	const styles = styleGenerator();
	const {amount,totalIncome} = props;

	// const testDiscount = activeDiscount != undefined ? activeDiscount : 5000;

	return (
			<View style={styles.container}>
					<View style={styles.price_item}>
						<H1 style={styles.title_text}>کل درآمد شما از بال</H1>
						<View style={styles.price_container}>
							<H1 style={styles.price_text}>{amount}</H1>
							<H1 style={styles.rial_text}> تومان</H1>
						</View>
					</View>

					<View style={styles.price_item}>
						<H1 style={styles.title_text}>درآمد شما از آخرین تسویه</H1>
						<View style={styles.price_container}>
							<H1 style={styles.price_text}>{totalIncome}</H1>
							<H1 style={styles.rial_text}> تومان</H1>
						</View>
					</View>

				</View>
	);
};

export default observer(IncreaseCard);
