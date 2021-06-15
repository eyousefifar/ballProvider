import React from 'react';
import {Provider} from 'react-native-paper';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
// local
import {Touchable, defaultTheme, Colors, H1, H2} from '../../../ball-library';
import {dismissCallOverlay} from "../../library/nav";
import {phonecall} from "react-native-communications";


class CallAlert extends React.Component {

	handleCall = async () => {
		dismissCallOverlay();
		phonecall('02532889358', true);
		// await closeDrawer()
	};

	render() {
		const styles = styleGenerator();
		return (
				<Provider theme={defaultTheme}>
					<View style={styles.container}>
						<Touchable
								style={{zIndex: -1}}
								onPress={dismissCallOverlay}
								rippleColor={'lightGrey'}
						/>
						<View style={styles.cardContainer}>

							<View style={styles.header_container}>
								<H1>مایل به تماس با پشتیبانی هستید؟</H1>
							</View>

							<View style={styles.two_buttons}>

								{/*logout from app*/}
								<RectButton style={[styles.reserve_button, {backgroundColor: Colors.primaryPurple}]} onPress={this.handleCall}>
									<H2 style={styles.reserve_button_text}>بله</H2>
								</RectButton>

								<RectButton style={styles.reserve_button} onPress={dismissCallOverlay}>
									<H2 style={[styles.reserve_button_text, {color: Colors.primaryPurple}]}>خیر</H2>
								</RectButton>

							</View>
						</View>
					</View>
				</Provider>
		);
	}
}

export default observer(CallAlert);
