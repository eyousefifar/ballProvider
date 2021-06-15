import React from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-native-paper';
import {screens} from '../constants';
import {observer} from 'mobx-react-lite';

import {Colors, defaultTheme} from '../theme';
import Touchable from '../Touchable';
import dismissOverlay from '../navigation/dismissOverlay';
// styles
import styleGenerator from './styles';
import showModal from '../navigation/showModal';
import {RectButton} from "react-native-gesture-handler";

const AuthNeeded = () => {
	const styles = styleGenerator();

	const onDismissPress = async () => {
		await dismissOverlay(screens.authNeeded.id);
	};

	const onAuthPress = async () => {
		await onDismissPress();
		await showModal(screens.authentication);
	};

	return (
			<Provider theme={defaultTheme}>
				<View style={styles.container}>
					<Touchable
							style={{zIndex: -1}}
							onPress={onDismissPress}
							rippleColor={'lightGrey'}
					/>
					<View style={styles.cardContainer}>

						<View style={{width: '100%', height: 100, alignItems: 'center', justifyContent: 'center'}}>
							<Text style={styles.popup_text}>لطفا برای ادامه ثبت نام کنید</Text>
						</View>

						<View style={styles.two_buttons}>

							<RectButton style={[styles.reserve_button, {backgroundColor: Colors.primaryPurple}]} onPress={onAuthPress}>
								<Text style={[styles.reserve_button_text, {color: Colors.whiteBall}]}>ورود و ثبت نام</Text>
							</RectButton>

							<RectButton style={styles.reserve_button} onPress={onDismissPress}>
								<Text style={styles.reserve_button_text}>انصراف</Text>
							</RectButton>

						</View>
					</View>
				</View>
			</Provider>
	);
};

export default observer(AuthNeeded);
