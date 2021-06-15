import {Navigation} from 'react-native-navigation';
import FAQ from '../screen';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
import {screens, dismissModal} from '../../ball-library';

export const registerFAQScreen = () => {
    Navigation.registerComponent(screens.FAQ.id, () =>
        gestureHandlerRootHOC(FAQ)
    );
};

export const dismissFAQ = async () => {
    await dismissModal(screens.FAQ.id);
};
