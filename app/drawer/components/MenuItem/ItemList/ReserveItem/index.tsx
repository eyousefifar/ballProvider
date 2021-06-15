import React from 'react';
import {View} from 'react-native';
import {observer} from 'mobx-react';
// styles
import styleGenerator from './styles';
import {Colors, H2, Icon} from "../../../../../ball-library";
import {ReserveItem} from "../../../../store/types";

const NotificationItem = (props: ReserveItem) => {

	const styles = styleGenerator();
	const {icon_name, name, date, time} = props;

	return (
			<View style={styles.container}>

				<View style={[styles.reserve_name_container,{flex:1,overflow:'hidden',marginRight:6}]}>
					<Icon type={'ball'} name={icon_name} color={Colors.primaryPurple} size={23}/>
					<H2 numberOfLines={1} style={styles.reserve_name_text}>{name}</H2>
				</View>

				<View style={[styles.reserve_name_container,{flexShrink:1,marginLeft:6}]}>
					<H2 style={styles.reserve_time}>{time}</H2>
					<H2 style={styles.reserve_date}>{date}</H2>
				</View>

			</View>
	);
};

export default observer(NotificationItem);
