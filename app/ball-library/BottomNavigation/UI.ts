import {observable, action, decorate, computed} from 'mobx';

class UIClass {
  public firstTabIsRendered: boolean = false;
  public setFirstTabRendered = () => {
    this.firstTabIsRendered = true;
  };
}
class TabUIClass {
  constructor(initialScreenIndex: number | undefined) {
    if (initialScreenIndex === undefined) {
      this.activeTabIndex = 0;
    } else {
      this.activeTabIndex = initialScreenIndex;
    }
  }
  public activeTabIndex: number;
  public setActiveTab(index: number) {
    this.activeTabIndex = index;
  }

  // computed
  get isCameraTab(){
    return this.activeTabIndex === 0;
  }
}
decorate(UIClass, {
  firstTabIsRendered: observable,
  setFirstTabRendered: action
});
decorate(TabUIClass, {
  activeTabIndex: observable,
  // isCameraTab: observable,
  isCameraTab:computed,
  setActiveTab: action
});

export default UIClass;
export const tabUI = new TabUIClass(0);
