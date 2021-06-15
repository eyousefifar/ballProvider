import { observable, action, decorate } from 'mobx';
import {
  InteractionManager,
  LayoutAnimation,
  Platform,
  UIManager
} from 'react-native';
if (Platform.OS === 'android') {
  // tslint:disable-next-line: no-unused-expression
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

class UIClass {
  public barLoaded: boolean = false;
  public loadProgress = () => {
    InteractionManager.runAfterInteractions(() => {
      setTimeout(() => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
        this.loadBar();
      }, 40);
    });
  };
  public loadBar = () => {
    this.barLoaded = true;
  };
}

decorate(UIClass, {
  barLoaded: observable,
  loadBar: action
});

export default UIClass;
