import React from 'react';
import {Text, TextInput, ToastAndroid, View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
//local
import {ISelectedReserves, ReserveItemServer} from "../../../store/types";
import {Colors, H2, H3} from "../../../../ball-library";

interface IFinalPrice {
	final_price: number,
	final_discount: number,
	reserved_items: any,
	sportId:string
}

const FinalPrice = (props: IFinalPrice) => {

	const styles = styleGenerator();
	const {final_price, final_discount, reserved_items,sportId} = props;

	const handleReserveItems = (reserved_items:any) : Array<ReserveItemServer> => {

		let reservedItems : Array<ReserveItemServer> = [];

		for (let item in reserved_items){
			reservedItems.push({
				sportSiteSessionUUID: reserved_items[item].uuid,
				count: reserved_items[item].amount
			})
		}

		// console.warn('reservedItems : ',reservedItems);

		return reservedItems;

	};

	const goToPaymentPage = async () => {
		if (Object.values(reserved_items).length === 0){
			ToastAndroid.show('سبد خرید شما خالی ست',ToastAndroid.SHORT)
		}else {
			let requestItems = await handleReserveItems(reserved_items);
			await showFinalReserve(reserved_items, final_price, final_discount,requestItems,sportId)
		}
	};

	return (
			<View style={styles.price_section}>

				<View style={styles.discount_box}>
					<View style={styles.input_container}>
						<H2 style={styles.input_discount}>{final_price} تومان</H2>
					</View>

					<View style={styles.separator}/>

					<RectButton style={styles.discount_button} onPress={goToPaymentPage}>
						<H2 style={styles.discount_button_text}>مشاهده سبد خرید</H2>
					</RectButton>
				</View>

			</View>
	);
};

export default observer(FinalPrice);


/*
<View style={styles.final_price_section}>
					<H2 style={styles.final_price}>{final_price} <H2 style={{color:Colors.whiteBall}} >تومان</H2></H2>
					<H3 style={styles.final_discount}>سود شما : {final_discount}</H3>
				</View>

				<RectButton style={styles.submit_button} onPress={goToPaymentPage}>
					<H2 style={styles.submit_button_text}>تایید</H2>
				</RectButton>
*/
