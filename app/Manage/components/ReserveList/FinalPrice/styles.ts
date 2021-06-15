import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		price_section:{
			width:'100%',
			height: 45,

			position:'absolute',
			bottom:0,

			paddingHorizontal:12,
			paddingVertical:4,
			paddingBottom:45,

			flexDirection:'row-reverse',
			// backgroundColor:Colors.primaryPurple,
			backgroundColor:Colors.whiteBall
		},

		submit_button:{
			width:'50%',
			height:'100%',
			borderRadius: Radius.typeButton_4,
			alignItems: 'center',
			justifyContent: 'center',
			backgroundColor:Colors.whiteBall
		},
		submit_button_text:{
			color:Colors.primaryPurple
		},

		discount_box:{
			flexDirection: 'row-reverse',

			width:'100%',
			height:40,

			borderRadius: Radius.typeButton_4,
			borderColor: Colors.primaryPurple,
			borderWidth: 1,

			marginBottom:6,

			overflow:'hidden'

		},
		input_container:{
			width:'70%',
			height:'100%',

			alignItems: 'center',
			justifyContent: 'center',

			// backgroundColor:'red'
		},
		input_discount:{
			color:Colors.greenBall,
		},


		price_box:{
			flexDirection: 'row-reverse',

			width:'100%',
			height:35,

			alignItems: 'center',
			justifyContent: 'space-between',

			borderColor:Colors.primaryPurple,
			borderRadius: Radius.typeButton_4,
			borderWidth:1,

			marginVertical:6
		},
		separator:{
			width:1,
			height:'80%',

			alignSelf:'center',

			backgroundColor:Colors.primaryPurple,
		},

		discount_button:{
			flexDirection:'row-reverse',
			width:'30%',
			height:'100%',

			alignItems: 'center',
			justifyContent: 'center',

			// backgroundColor:'red'
		},
		discount_button_text:{
			color:Colors.primaryPurple,

			// marginHorizontal:30
		},


		final_price_section:{
			width:'50%',
			height:'100%',
			alignItems: 'center',
			justifyContent: 'center'
		},
		final_price:{
			color:Colors.whiteBall,
			// marginBottom:4
		},
		final_discount:{
			color:'#b1b1b1',
			marginTop:-4
		}
	});
};
