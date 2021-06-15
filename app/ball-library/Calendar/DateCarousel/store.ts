import { observable, action, decorate } from 'mobx';
import { jMonths } from './types';

class DateStore {
  constructor(args) {
    this.selectedMonth = 'اردیبهشت';
  }
  public selectedMonth: jMonths;

  public day: number = 1;
  setMonth = (value: jMonths) => {
    this.selectedMonth = value;
  };
  setDay = (day: number) => {
    this.day = day;
  };
}

decorate(DateStore, {
  selectedMonth: observable,
  day: observable,
  setMonth: action,
  setDay: action
});

const store = new DateStore('');
export default store;
