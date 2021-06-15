import React, {useState} from 'react';
import {Text,View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
import {BorderWidth, Colors} from "../theme";
//local

interface INormalFilterButton {
	title: string,
	invert: boolean,
	elevation?: boolean,
	border?: boolean
}

const NormalFilterButton = (props: INormalFilterButton) => {

	const styles = styleGenerator();
	const {elevation, title, invert, border} = props;

	const [isSelected, toggleButton] = useState(false);

	return (
			<View style={[styles.container, isSelected && border && {borderWidth: BorderWidth.type_4, borderColor: Colors.whiteBall}, invert && {scaleX: -1}, elevation && {elevation: 4}]}>
				<RectButton onPress={() => toggleButton(!isSelected)}
				            style={[styles.filterButton, isSelected && styles.filterButton_pressed ]}>
					<Text style={[styles.filterButton_text, isSelected && styles.filterButton_text_pressed]}>{title}</Text>
				</RectButton>
			</View>
	);
};

export default observer(NormalFilterButton);
