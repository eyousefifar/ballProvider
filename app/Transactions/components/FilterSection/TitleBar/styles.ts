import {StyleSheet} from 'react-native';
import {BorderWidth, Colors} from "../../../../ball-library/theme";


export default () => {
	return StyleSheet.create({
		container:{
			width: '100%',
			// height: 50,
			flexDirection: 'row-reverse',
			alignItems: 'center',
			justifyContent: 'space-between',
			// backgroundColor: 'red'
		},
		line: {
			height: StyleSheet.hairlineWidth,
			flexGrow: 1,
			borderRadius:1,
			backgroundColor: Colors.titleBarLines
		},
		title_container:{
			alignItems: 'center',
			justifyContent: 'center',
			flexShrink: 1,
			marginHorizontal: 16
		},
		title_text:{
			// marginVertical:4
		}
	});
};
