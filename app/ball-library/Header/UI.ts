import { Animated } from 'react-native';

class UIClass {
  public headerOpacity: Animated.Value = new Animated.Value(0);

  public animateHeader = () => {
    Animated.timing(this.headerOpacity, {
      toValue: 1,
      duration: 240,
      useNativeDriver: true
    }).start();
  };
}

export default UIClass;
