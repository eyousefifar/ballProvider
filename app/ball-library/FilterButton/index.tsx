import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
// styles
import styleGenerator from './styles';
//local
import {Colors, H2, Icon} from "../index";
import {BorderWidth, Elevation} from "../theme";

interface IFilterButton {
    title: string,
    iconName: string,
    invert: boolean,
    elevation?: boolean,
    border?: boolean,
    iconType:string,

    onStateChange?(isSelected: boolean): void,
}

const FilterButton = (props: IFilterButton) => {

    const styles = styleGenerator();
    const {elevation, title, iconName, invert, border,iconType} = props;

    const [isSelected, toggleButton] = useState(false);

    const handleFilterState = () => {
        toggleButton(!isSelected);
        props.onStateChange ? props.onStateChange(isSelected) : null
    };

    return (
        <View
            style={[styles.container, border && {borderWidth: BorderWidth.type_4,}, border && isSelected ? {borderColor: Colors.whiteBall} : {borderColor: Colors.primaryPurple}, invert && {scaleX: -1}, elevation && {elevation: Elevation.type_6}]}>
            <RectButton onPress={handleFilterState}
                        style={[styles.filterButton, isSelected && styles.filterButton_pressed]}>
                <Icon type={iconType} name={iconName} color={isSelected ? Colors.whiteBall : Colors.titleBarLines}
                      size={20}/>
                <H2 style={[styles.filterButton_text, isSelected && styles.filterButton_text_pressed]}>
                    {title}
                </H2>
            </RectButton>
        </View>
    );
};

export default observer(FilterButton);
