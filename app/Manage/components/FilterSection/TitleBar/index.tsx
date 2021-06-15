import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {H1, H2, H3} from "../../../../ball-library";

interface ITitleBar {
	title: string,
	lineColor?: string,
	type:'H1'|'H2'|'H3'
}

const TitleBar = (props: ITitleBar) => {

	const styles = styleGenerator();
	const {title, lineColor,type} = props;

	const renderText = () => {
		switch (type) {
			case "H1":
				return (<H1>{title}</H1>);
			case "H2":
				return (<H2>{title}</H2>);
			case "H3":
				return (<H3>{title}</H3>);
		}
	};

	return (
			<View style={styles.container}>
				<View style={[styles.line, lineColor != null && {backgroundColor: lineColor}]}/>

				<View style={styles.title_container}>
					{renderText()}
				</View>

				<View style={[styles.line, lineColor != null && {backgroundColor: lineColor}]}/>
			</View>
	);
};

export default observer(TitleBar);
