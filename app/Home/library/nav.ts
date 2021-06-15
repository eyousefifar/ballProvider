import { Navigation } from 'react-native-navigation';
import HomePage from '../screen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { screens } from '../../ball-library';

export const registerHomePageScreen = () => {
  Navigation.registerComponent(screens.home.id, () =>
    gestureHandlerRootHOC(HomePage)
  );
};
