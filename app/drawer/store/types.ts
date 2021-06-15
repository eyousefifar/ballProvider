import {IReserveItem} from "../library/types";
import {Notif} from "../library/types";

export interface IDrawerItem {
	id: string,
	title: string,
	// onPress: (type:'aboutUs'|'Policy'|'FAQ') => {},
	onPress: () => Promise<void>,
	type: 'plain' | 'empty' | 'reserves' | 'notifications',

	lastReserves?: Array<IReserveItem>,
	lastNotifications?:Array<Notif>,

}


export interface ReserveItem {
	icon_name:sports,
	name:string,
	date:string,
	time:string
}

type sports =
		| 'basketball'
		| 'football'
		| 'futsal'
		| 'Karting'
		| 'paintball'
		| 'Pool'
		| 'Game-room'
		| 'scape-room'
		| 'sport-complex'
		| 'volleyball';

export interface INotificationItem {
	icon_name: sports;
	message: string;
}
