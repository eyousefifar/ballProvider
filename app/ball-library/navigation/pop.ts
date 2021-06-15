import {Navigation} from 'react-native-navigation';
import state from './state';
import {Keyboard} from 'react-native';

export default async (componentId: string) => {
  if (state.canRemoveScreen(componentId, 'pop')) {
    Keyboard.dismiss();
    await Navigation.pop(componentId);
  }
};
