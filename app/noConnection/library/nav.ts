import { Navigation } from 'react-native-navigation';
import NoConnection from '../screen';
import { screens, dismissModal } from '../../ball-library';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

export const registerNoConnectionScreen = () => {
  Navigation.registerComponent(screens.noConnection.id, () =>
    gestureHandlerRootHOC(NoConnection)
  );
};

export const dismissNoConnectionScreen = async () => {
  await dismissModal(screens.noConnection.id);
};
