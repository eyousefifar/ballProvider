import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../../ball-library/theme";


export default () => {
	return StyleSheet.create({

		parent_empty_box:{
			width: '100%',
			// height: 70,

			paddingHorizontal:12

		},
		empty_box: {
			width: '100%',
			// height: '100%',
			alignItems: 'center',
			justifyContent: 'center',

			borderWidth: BorderWidth.type_4,
			borderColor: Colors.titleBarLines,
			borderRadius: Radius.typeButton_4,

			paddingVertical:12
		},

		reserve_list: {
			width: '100%',
			// marginBottom:50
		},

		reserve_list_content: {
			alignItems: 'flex-end'
		},



	});
};
