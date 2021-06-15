import {StyleSheet} from 'react-native';
import {Colors} from "../../../../../ball-library/theme";


export default () => {
    return StyleSheet.create({
        container: {
            width: '100%',
            flexDirection: 'row-reverse',

            alignItems: 'center',
            // justifyContent: 'center',
            marginVertical: 4
        },
        notification_text: {
        	maxWidth:'90%',
            color: Colors.primaryPurple,

            marginRight: 4,

        }
    });
};
