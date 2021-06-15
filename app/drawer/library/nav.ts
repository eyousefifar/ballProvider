import {Navigation} from 'react-native-navigation';
import Drawer from '../screen';
import LogoutOverlay from '../components/Logout';
import CallAlert from "../components/CallAlert";
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {showModal, showOverlay, screens, dismissOverlay} from '../../ball-library';

export const registerDrawerScreen = () => {
    Navigation.registerComponent(screens.drawer.id, () =>
        gestureHandlerRootHOC(Drawer)
    );
    Navigation.registerComponent(screens.logout.id, () =>
        gestureHandlerRootHOC(LogoutOverlay)
    );
    Navigation.registerComponent(screens.call.id, () =>
        gestureHandlerRootHOC(CallAlert)
    );
};

export const showProfile = async (mode: 'edit' | 'normal') => {
    await showModal({
        ...screens.profile,
        passProps: {
            mode
        }
    });
};

export const showAuth = async () => {
    await showModal({
        ...screens.authentication
    });
};

export const showReserves = async () => {
    // await showModal({
    //     ...screens.reservationList
    // });
};

export const showSupport = async () => {

    // TODO => what is support for providers ??

    /*await push({
        startId: screens.home.id,
        toScreenId: screens.support.id,
        auth: true
    });

    await Navigation.mergeOptions(screens.support.id, {
        sideMenu: {
            right: {
                visible: false
            }
        }
    });*/
};

export const closeDrawer = async () => {
    await Navigation.mergeOptions(screens.home.id, {
        sideMenu: {
            right: {
                visible: false
            }
        }
    });
};

export const showNotifications = async () => {
    // await showModal({
    //     ...screens.notifications
    // });
};

export const showChangeAccount = async () => {
    await showModal({
        ...screens.changeAccount,
    });
};
export const showAboutUs = async () => {
    await showModal({
        ...screens.aboutUs,
    });
};

export const showFAQ = async () => {
    await showModal({
        ...screens.FAQ,
    });
};

export const showLogout = async () => {
    await showOverlay({
        ...screens.logout
    });
};

export const showCallOverlay = async () => {
    await showOverlay({
        ...screens.call
    });
};

export const dismissCallOverlay = async () => {
    await dismissOverlay(screens.call.id)
};

export const showWallet = async () => {
    await showModal({
        ...screens.wallet
    });
};

export const dismissLogoutOverLay = async () => {
    await dismissOverlay(screens.logout.id);
};

export const exitAppAndResetRoot = async () => {
    await Navigation.setRoot({
        root: {
            sideMenu: {
                center: {
                    stack: {
                        children: [
                            {
                                component: {
                                    id: screens.authentication.id,
                                    name: screens.authentication.id,
                                }
                            },
                        ],
                        options: {
                            animations: {
                                setRoot: {
                                    enabled: false
                                }
                            }
                        }
                    }
                },
            },
        },
    });

};
