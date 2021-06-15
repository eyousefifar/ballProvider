import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../../../../ball-library/theme";


const reserveBoxWidth = 144;
const singleReserveBtn = 35;

export default () => {
	return StyleSheet.create({
		container: {
			width: reserveBoxWidth,
			height: '100%',

			alignItems: 'center',
			// justifyContent:'space-between',

			borderWidth: BorderWidth.type_4,
			borderColor: Colors.titleBarLines,
			borderRadius: Radius.typeButton_4,

			backgroundColor:Colors.whiteBall,

			marginLeft: 8,

			paddingHorizontal: 6,
			paddingVertical: 6,
			// paddingTop:18,

			// overflow: 'hidden',
			transform: [{rotateY: '180deg'}],
			zIndex: 0
		},

		white_text:{
			color: Colors.whiteBall,marginBottom:12
		},

		reserve_price: {
			color: Colors.greenBall,
		},


		reserve_button_single_container: {
			position:'absolute',
			bottom:6,

			width: '100%',
			height: singleReserveBtn,

			overflow: 'hidden',

			borderRadius: Radius.typeButton_4,
			borderWidth: BorderWidth.type_4,
			borderColor: Colors.titleBarLines,

			backgroundColor:Colors.whiteBall
		},

		reserve_button_single_container_selected: {
			backgroundColor: Colors.ballNewGray,
			borderWidth: 0,
			// borderColor: 'rgba(0,0,0,0.6)'
		},

		reserve_button_single: {
			width: '100%',
			height: singleReserveBtn,

			alignItems: 'center',
			justifyContent: 'center',
		},






	});
};
