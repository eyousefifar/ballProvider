import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {H2} from "../../../../ball-library";

interface ITitleBar {
    title: string,
    lineColor?: string,
    titleColor?: string
}

const TitleBar = (props: ITitleBar) => {

    const styles = styleGenerator();
    const {title, lineColor, titleColor} = props;

    return (
        <View style={styles.container}>
            <View style={[styles.line, lineColor != null && {backgroundColor: lineColor}]}/>

            <View style={styles.title_container}>
                <H2 style={[styles.title_text, titleColor != null && {color: titleColor}]}>{title}</H2>
            </View>

            <View style={[styles.line, lineColor != null && {backgroundColor: lineColor}]}/>
        </View>
    );
};

export default observer(TitleBar);
