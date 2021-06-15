import {Navigation} from 'react-native-navigation';
import AboutUs from '../screen';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {screens, dismissModal, showModal, push} from '../../ball-library';

export const registerAboutUsScreen = () => {
    Navigation.registerComponent(screens.aboutUs.id, () =>
        gestureHandlerRootHOC(AboutUs)
    );
};

export const dismissAboutUs = async () => {
    await dismissModal(screens.aboutUs.id);
};


export const showPrivacyModal = async () => {
    await showModal({
      ...screens.privacy,
    })
    // await push({
    //     startId: screens.aboutUs.id,
    //     toScreenId: screens.privacy.id,
    //     auth: false,
    // })
};
