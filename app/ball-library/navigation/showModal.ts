import {
  Navigation,
  OptionsModalPresentationStyle,
} from 'react-native-navigation';
import state from './state';
import authCheck from './authCheck';

interface IShowModal {
  id: string;
  auth: boolean;
  passProps?: object;
}

export default async (args: IShowModal) => {
  const {id, auth, passProps} = args;
  if (authCheck(auth)) {
    if (state.canAddScreen(id, 'showModal')) {
      await Navigation.showModal({
        stack: {
          
          children: [
            {
              component: {
                passProps,
                id: id,
                name: id,
              },
            },
          ],
        },
      });
    }
  }
};
