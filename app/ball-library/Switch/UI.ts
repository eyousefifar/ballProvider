import { decorate, action, observable, computed } from 'mobx';

class UIClass {
  public selectedSwitch: 'male' | 'female' = 'male';
  get isMale() {
    return this.selectedSwitch === 'male';
  }
  get isFemale() {
    return this.selectedSwitch === 'female';
  }
  public toggleSwitch = (type: 'male' | 'female')  => {
    if (this.selectedSwitch === type) {
      return ; // needs to be scalable for multi switch design
    } else {
      this.selectedSwitch = type;
      // return type
    }
    console.warn('selectedSwitch : ', this.selectedSwitch);

  };
}
decorate(UIClass, {
  selectedSwitch: observable,
  isMale: computed,
  isFemale: computed,
  toggleSwitch: action
});

export default UIClass;
