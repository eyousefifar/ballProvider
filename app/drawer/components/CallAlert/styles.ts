import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../../ball-library/theme";

export default () => {
	return StyleSheet.create({
		container: {
			flex: 1,
			backgroundColor: Colors.transparentGrey,
			alignItems: 'center',
			justifyContent: 'center'
		},
		cardContainer: {
			width: '80%',
			backgroundColor: 'white',
			borderRadius: Radius.typeButton_4,
			zIndex: 1,
			alignItems: 'center',
			justifyContent:'center',
			overflow:'hidden'
		},
		popup_text:{
			fontFamily:'IRANSansMobile(FaNum)',
			fontSize:15,
		},
		header_container:{
			width: '100%',
			height: 100,

			alignItems: 'center',
			justifyContent: 'center'
		},

		two_buttons:{
			flexDirection:'row-reverse',

			width:'100%',
			height:45,

			justifyContent:'space-between',

			borderWidth: BorderWidth.type_4,
			borderColor:Colors.primaryPurple,

			borderBottomLeftRadius:Radius.typeButton_4,
			borderBottomRightRadius:Radius.typeButton_4,
		},

		reserve_button:{
			width: '50%',
			height:'100%',
			backgroundColor:Colors.whiteBall,
			alignItems:'center',
			justifyContent:'center',
			// position:'absolute',
			// bottom:0

		},
		reserve_button_text:{
			color:Colors.whiteBall,
		}
	});
};
