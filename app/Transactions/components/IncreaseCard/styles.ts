import {StyleSheet} from 'react-native';
import {Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',

			paddingHorizontal:12,
			paddingTop:12,
			paddingBottom:12,

			// borderWidth: BorderWidth.type_4,
			// borderColor:'rgba(0,0,0,0.5)',
			borderRadius:Radius.typeButton_4,

			backgroundColor:Colors.primaryPurple,

			marginBottom:8
		},
		price_item:{
			width: '100%',
			flexDirection:'row-reverse',
			justifyContent:'space-between',
			alignItems: 'center',
		},

		title_text:{
			color:Colors.whiteBall
		},
		price_container:{
			flexDirection: 'row-reverse',
			alignItems: 'center',
			justifyContent: 'center'

		},
		price_text:{
			color:Colors.whiteBall,
			marginLeft:2
		},
		rial_text:{
			color:Colors.whiteBall
		},

		inc_btn:{
			width:'100%',
			height:30,
			backgroundColor:Colors.whiteBall,
			alignItems: 'center',
			justifyContent: 'center',

			borderRadius:Radius.typeButton_4,
			marginTop:6
		},
		inc_btn_text:{
			color:Colors.primaryPurple
		}

	});
};
