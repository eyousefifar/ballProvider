import { Navigation } from 'react-native-navigation';
import { screens } from '../constants';
import AuthNeeded from '../AuthNeeded';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export const registerAuthNeededScreen = () => {
  Navigation.registerComponent(screens.authNeeded.id, () =>
    gestureHandlerRootHOC(AuthNeeded)
  );
};
