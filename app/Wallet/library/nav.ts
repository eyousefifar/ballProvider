import {Navigation} from 'react-native-navigation';
import Wallet from '../screen/Wallet';
import {push, screens, showModal} from '../../ball-library';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

export const registerWalletScreen = () => {

    Navigation.registerComponent(screens.wallet.id, () =>
        gestureHandlerRootHOC(Wallet)
    );
};


// export const showTransactions = async (walletId: string) => {
//     await push({
//         startId: screens.wallet.id,
//         toScreenId: screens.walletTransactions.id,
//         auth: screens.walletTransactions.auth,
//         passProps: {
//             walletId: walletId
//         }
//     });
// };


export const showTransactions = async (sportId: string) => {
    await showModal({
        ...screens.walletTransactions,
        passProps:{
            sportId:sportId
        }
    })
};

export const toggleDrawer = async () => {
    await Navigation.mergeOptions(screens.wallet.id, {
        sideMenu: {
            right: {
                visible: true,
            },
        },
    });
};
