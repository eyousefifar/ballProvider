import React from 'react';
import {Text, View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
// local
import {Colors, H2, Icon} from "../../../../../ball-library";
import {INotificationItem} from "../../../../store/types";


const NotificationItem = (props:INotificationItem) => {

	const styles = styleGenerator();
	const {message,icon_name} = props;

	return (
			<View style={styles.container}>
					<Icon type={'ball'} name={icon_name} color={Colors.primaryPurple} size={23} />
					<H2 numberOfLines={1} style={styles.notification_text}>{message}</H2>
			</View>
	);
};

export default observer(NotificationItem);
