import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
import {Touchable, Icon, H1} from '../../../ball-library';
// styles
import styleGenerator from './styles';
// local
import ItemList from './ItemList';
import {IDrawerItem} from "../../store/types";

const MenuItem = (props: IDrawerItem) => {
    const {title, type, onPress, lastReserves, lastNotifications} = props;
    const {styles, icon} = styleGenerator();
    const isExtended = (
        type === 'reserves' && lastReserves?.length != 0 ||
        type === 'notifications' && lastNotifications?.length != 0
    );

    return (
        <View style={styles.container}>
            <View style={styles.collapsedContainer}>
                <H1>{title}</H1>
                <Icon
                    type={'ion'}
                    name={'ios-arrow-back'}
                    size={icon.size}
                    color={icon.color}
                />
            </View>

            {isExtended &&
            <ItemList type={type} lastNotifications={lastNotifications} lastReserves={lastReserves}/>
            }
            <Touchable onPress={onPress} rippleColor={'grey'}/>
        </View>
    );
};

export default observer(MenuItem);
