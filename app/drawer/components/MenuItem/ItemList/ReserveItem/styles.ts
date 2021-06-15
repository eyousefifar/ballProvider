import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width:'100%',

			flexDirection:'row-reverse',

			alignItems: 'center',
			justifyContent: 'space-between',

			marginVertical:4,
			// backgroundColor:'red'
		},

		reserve_name_container:{
			flexDirection: 'row-reverse',
			alignItems: 'center',
		},
		reserve_name_text:{
			maxWidth:'100%',

			color: Colors.primaryPurple,
			marginRight:4,
		},
		reserve_date:{
			marginRight:6,
			color: Colors.primaryPurple
		},
		reserve_time:{
			color: Colors.primaryPurple
		}

	});
};
