import React from 'react';
import {ImageBackground, Image} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';

const BackgroundAuth = () => {

	const styles = styleGenerator();

	return (
			<ImageBackground source={require('../../assets/background.png')} style={styles.container}
			                 resizeMode={'stretch'}
			                 resizeMethod={'resize'}>
				<Image source={require('../../assets/ball.png')} style={styles.logo}/>
			</ImageBackground>
	);
};

export default observer(BackgroundAuth);
