import { Navigation } from 'react-native-navigation';
import PrivacyAndPolicy from '../screen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import {screens, dismissModal} from '../../ball-library';


export const registerPrivacyScreen = () => {
  Navigation.registerComponent(screens.privacy.id, () =>
    gestureHandlerRootHOC(PrivacyAndPolicy)
  );
};

export const dismissPrivacy = async () => {
  await dismissModal(screens.privacy.id);
  // await pop(screens.privacy.id);
};


