import {Navigation} from 'react-native-navigation';
import state from './state';
import authCheck from './authCheck';

interface IPush {
  startId: string;
  toScreenId: string;
  auth: boolean;
  passProps?: object;
}
export default async (args: IPush) => {
  const {startId, toScreenId, auth, passProps} = args;
  if (authCheck(auth)) {
    if (state.canAddScreen(toScreenId, 'push')) {
      await Navigation.push(startId, {
        component: {
          passProps,
          id: toScreenId,
          name: toScreenId,
        },
      });
    }
  }
};
