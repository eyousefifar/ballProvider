import { observable, action, decorate } from 'mobx';
import { screens } from '../constants';
import { Navigation } from 'react-native-navigation';

class loadingState {
  lastScreen: string | null = null;
  suspendedScreen: string | null = null;
  currentAppearedScreen: string | null = null;
  setCurrentScreen = (componentName: string | null) => {
    this.lastScreen = this.currentAppearedScreen;
    this.suspendedScreen = componentName;
    
  };
  setSuspendedScreen = () => {
    this.currentAppearedScreen = this.suspendedScreen;
  }
  appearEventListener = Navigation.events().registerComponentDidAppearListener(
    ({ componentId, componentName, passProps }) => {
      if (
        componentName !== screens.drawer.id &&
        componentName !== screens.authNeeded.id &&
        componentName !== screens.logout.id
      ) {
        this.setCurrentScreen(componentName);
      }
    }
  );
  disappearEventListener = Navigation.events().registerComponentDidDisappearListener(
    ({ componentId, componentName }) => {
      if (
        componentName !== screens.drawer.id &&
        componentName !== screens.authNeeded.id &&
        componentName !== screens.logout.id
      ) {
        if (this.lastScreen !== componentName) {
          this.setCurrentScreen(this.lastScreen);
        }
      }
    }
  );
  onCompeleteAnimation = Navigation.events().registerCommandCompletedListener(()=> {
      this.setSuspendedScreen();
  })
}

decorate(loadingState, {
  currentAppearedScreen: observable,
  setCurrentScreen: action,
  setSuspendedScreen: action
});


const state = new loadingState();

export default state;
