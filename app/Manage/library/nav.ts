import { Navigation } from 'react-native-navigation';
import ManagePage from '../screen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { screens } from '../../ball-library';

export const registerManagePageScreen = () => {
  Navigation.registerComponent(screens.manage.id, () =>
    gestureHandlerRootHOC(ManagePage)
  );
};


export const toggleDrawer = async () => {
  await Navigation.mergeOptions(screens.manage.id, {
    sideMenu: {
      right: {
        visible: true,
      },
    },
  });
};

