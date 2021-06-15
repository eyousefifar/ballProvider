import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',
			overflow:'hidden',
			// backgroundColor: 'yellow',

			paddingHorizontal:12,
			paddingTop:6,
			paddingBottom:1,
			marginBottom:12
		},
		searchBar_container_area: {
			width: '100%',

			elevation: 2,

			borderRadius: Radius.typeButton_4,
			overflow: 'hidden',

			alignSelf: 'center',
			alignItems: 'center',

			backgroundColor: '#fcfcfc'
		},
		searchBar_container: {
			width: '100%',
			height: 48,

			flexDirection: 'row-reverse',

			borderRadius: Radius.typeButton_4,

			alignItems: 'center',
			justifyContent: 'space-between',
			// backgroundColor: 'red'
		},
		right_section: {
			width: 48,
			height: '100%',
			justifyContent: 'center',
			alignItems: 'center'
		},
		menu_icon: {
			marginLeft: 8,
			marginRight: 8
		},

		middle_section: {
			flex: 1,
			height: '100%',
			justifyContent: 'center',
			fontSize: 14,
			fontFamily: 'IRANSansMobile(FaNum)',
			textAlign:'right',
			color:Colors.ballNewGray
		},
		middle_section_text_container: {
			height: '100%',
			justifyContent: 'center'
		},

		img:{
			width:20,
			height:32,

			// zIndex:-10

			// backgroundColor:Colors.primaryPurple,
		},

		left_section: {
			height: '100%',
			paddingLeft: 8,
			justifyContent: 'center',
		},
		left_section_container_box: {
			borderWidth: BorderWidth.type_4,
			borderColor: 'rgba(0,0,0,0.7)',
			borderRadius: Radius.typeButton_4,
			alignItems: 'center',
			justifyContent: 'center',
			overflow: 'hidden'
		},
		left_section_text: {
			fontFamily: 'IRANSansMobile(FaNum)',
			fontSize: 14,
			marginVertical: 4,
			marginHorizontal: 16
		},
	});
};
