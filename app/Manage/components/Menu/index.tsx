import React from 'react';
import {View, Text} from 'react-native';
import styleGenerator from './styles';


import {observer} from 'mobx-react';
import {RectButton} from "react-native-gesture-handler";
import {Colors, Icon} from "../../../ball-library";

interface IMenuPress {
    onIconPress : () => {}
}

const Menu = (props:IMenuPress) => {

    const styles = styleGenerator();
    const {onIconPress} = props;

    return (
        <View style={styles.menu_container}>
            <RectButton style={styles.right_section} onPress={onIconPress}>
                <Icon type={'simpleLine'} name={'menu'} size={25} color={Colors.titleBarLines}
                      style={styles.menu_icon}/>
            </RectButton>
        </View>
    );
};


export default observer(Menu);
