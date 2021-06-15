import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';

import {auth, BottomNavigation, screens, timeClass, userProfile} from '../../ball-library';
// local
import {Scanner} from "../../Scanner";
import {Manage} from "../../Manage";
import {Wallet} from "../../Wallet";
import Loading from "../../ball-library/Loading";
import {View} from "react-native";
import {getSportSitesId} from "../library/api";


interface IHomePage {
	initialScreenIndex: number,
}

const HomePage = (props:IHomePage) => {
	const {initialScreenIndex} = props;

	const [loading,setLoading] = useState<boolean>(false);
	const [sportSiteId,setSportSiteId] = useState<boolean>(false);

	const [isScannerPage,setIsScannerPage] = useState<boolean>(false);

	const firstLaunch = async () => {
		// const promises = [
			await userProfile.getSportSiteIds();
			await timeClass.getTimeAndDate();
			await userProfile.getAllUserInfo();
			// await getSportSitesId(auth.getToken())
		// ];
		console.warn('sportID : ', userProfile.sportSiteIds[0]);

		// Promise.all(promises).then(data => {
		// });

		setLoading(true)
	};

	useEffect( () => {
		firstLaunch()
	},[]);

	return (
		<Loading dark={true} loaded={loading} screenId={screens.sport.id}>
			<BottomNavigation
					renderProps={[
						{
							tabTitle: 'اسکنر',
							tabIcon: {
								type: 'antDesign',
								name: 'qrcode'
							},
							screen: <Scanner />,

						},
						{
							tabTitle: 'مدیریت',
							tabIcon: {
								type: 'ball',
								name: 'calendar'
							},
							screen: <Manage/>
						},
						{
							tabTitle: 'مالی',
							tabIcon: {
								type: 'ball',
								name: 'Wallet-financial'
							},
							screen: <Wallet />
						},
					]}
					initialScreenIndex={initialScreenIndex}
			/>
		</Loading>
	);
};
export default observer(HomePage);
