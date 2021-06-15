import { Navigation } from 'react-native-navigation';
import QrCode from '../screen';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { screens } from '../../ball-library';

export const registerQrCodePageScreen = () => {
  Navigation.registerComponent(screens.qrCode.id, () =>
    gestureHandlerRootHOC(QrCode)
  );
};

export const toggleDrawer = async () => {
  await Navigation.mergeOptions(screens.qrCode.id, {
    sideMenu: {
      right: {
        visible: true,
      },
    },
  });
};

