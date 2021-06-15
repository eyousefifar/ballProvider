import {Navigation} from 'react-native-navigation';
import Transactions from "../screen/Transactions";
import {dismissModal, screens} from '../../ball-library';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {transactionsStore} from "../store/TransactionsStore";


export const registerTransactionScreen = () => {
	Navigation.registerComponent(screens.walletTransactions.id, () =>
			gestureHandlerRootHOC(Transactions)
	);
};


// export const dismissTransactionScreen = async () => {
// 	await pop(screens.walletTransactions.id);
// 	await transactionsStore.reset();
// };


export const dismissTransactionScreen = async () => {
	await dismissModal(screens.walletTransactions.id);
	await transactionsStore.reset();
};
