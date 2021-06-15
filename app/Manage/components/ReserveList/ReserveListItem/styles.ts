import {StyleSheet} from 'react-native';
import {BorderWidth, Colors, Radius} from "../../../../ball-library/theme";


const rowHeight = 192 ;
const timeBoxWidth = 66 ;

export default () => {
	return StyleSheet.create({
		reserve_container: {
			width: '100%',
			height: rowHeight,
			flexDirection: 'row-reverse',
			alignItems: 'center',

			marginBottom: 6,

			paddingVertical:6,
			paddingHorizontal:12,

			// backgroundColor: 'yellow'
		},

		reserve_title_box: {
			width: timeBoxWidth,
			height: '100%',
			alignItems: 'center',
			justifyContent: 'center',
			borderRadius: Radius.typeButton_4,
			borderWidth: BorderWidth.type_4,
			borderColor: Colors.titleBarLines,
			marginLeft: 8,
			flexShrink: 1
		},

		reserve_list: {
			flex: 1,
			height: '100%',
			transform: [{rotateY: '180deg'}],

		}
	});
};
