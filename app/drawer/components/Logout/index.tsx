import React from 'react';
import {Provider} from 'react-native-paper';
import {View, Text, ToastAndroid} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Touchable, defaultTheme, Colors, userProfile, auth, H1, H2} from '../../../ball-library';
import {closeDrawer, dismissLogoutOverLay, exitAppAndResetRoot} from "../../library/nav";
import {logoutServer} from "../../library/api";


class LogoutOverlay extends React.Component {

	handleLogout = async () => {
		//TODO : check again maybe has bug
		let logoutRes = await logoutServer(auth.getToken());

		if (logoutRes.state === 'success'){
			await userProfile.logout();
			ToastAndroid.show(logoutRes.message,ToastAndroid.SHORT)
		}else {
			ToastAndroid.show(logoutRes.message,ToastAndroid.SHORT)
		}

		await dismissLogoutOverLay();
		await exitAppAndResetRoot();
		// await closeDrawer();

	};

	render() {
		const styles = styleGenerator();
		return (
				<Provider theme={defaultTheme}>
					<View style={styles.container}>
						<Touchable
								style={{zIndex: -1}}
								onPress={dismissLogoutOverLay}
								rippleColor={'lightGrey'}
						/>
						<View style={styles.cardContainer}>

							<View style={styles.header_container}>
								<H1>مایل به خروج از حساب کاربری خود هستید؟</H1>
							</View>

							<View style={styles.two_buttons}>

								{/*logout from app*/}
								<RectButton style={[styles.reserve_button, {backgroundColor: Colors.primaryPurple}]} onPress={this.handleLogout}>
									<H2 style={[styles.reserve_button_text, {color: Colors.whiteBall}]}>بله</H2>
								</RectButton>

								<RectButton style={styles.reserve_button} onPress={dismissLogoutOverLay}>
									<H2 style={styles.reserve_button_text}>خیر</H2>
								</RectButton>

							</View>
						</View>
					</View>
				</Provider>
		);
	}
}

export default observer(LogoutOverlay);
