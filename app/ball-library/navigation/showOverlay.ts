import { Navigation } from 'react-native-navigation';
import state from './state';

import authCheck from './authCheck';
interface IShowOverlay {
  id: string;
  auth: boolean;
  passProps?: object;
}

export default async (args: IShowOverlay) => {
  const { auth, id, passProps } = args;
  if (authCheck(auth)) {
    if (state.canAddScreen(id, 'showOverlay')) {
      await Navigation.showOverlay({
        component: {
          passProps,
          id: id,
          name: id,
          options: {
            layout: {
              backgroundColor: 'rgba(0,0,0,0.25)'
            },
            overlay: {
              interceptTouchOutside: false,
              handleKeyboardEvents: true
            }
          }
        }
      });
    }
  }
};
