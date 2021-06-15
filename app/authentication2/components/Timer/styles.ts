import {StyleSheet} from 'react-native';
import {Colors} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		timer: {
			// color: Colors.redDiscount,
			color: Colors.whiteBall,

		},

		end_time_text:{
			color:Colors.whiteBall,
			textDecorationLine:'underline'
		}
	});
};
