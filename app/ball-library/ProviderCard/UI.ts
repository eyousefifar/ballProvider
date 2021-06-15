import {Animated} from 'react-native';

export default class UIClass {
  public TranslateY: Animated.Value = new Animated.Value(0);
  public TranslateX: Animated.Value = new Animated.Value(0);
  public showReserveMenu = () => {
    Animated.timing(this.TranslateY, {
      toValue: -230,
      duration: 160,
      useNativeDriver: true,
    }).start();
  };
  public hideReserveMenu = () => {
    Animated.timing(this.TranslateY, {
      toValue: 0,
      duration: 120,
      useNativeDriver: true,
    }).start();
  };
  public navigateToMenu = (index: number) => {
    Animated.timing(this.TranslateX, {
      toValue: 120 * index,
      duration: 120,
      useNativeDriver: true,
    }).start();
  };
}
