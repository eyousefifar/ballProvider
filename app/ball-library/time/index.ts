import {action, decorate, observable} from "mobx";
import {getTimeAndDate} from "./api";


class TimeClass {
    currentYear: number = 0;
    currentMonth: number = 0;
    currentDay: number = 0;


    setDateAndTime = (time: any) => {
        const timeAndDate = time.split(' ');
        let currentDate = timeAndDate[0].split('-');
        let currentTime = timeAndDate[1];

        this.currentYear = parseInt(currentDate[0]);
        this.currentMonth = parseInt(currentDate[1]);
        this.currentDay = parseInt(currentDate[2]);

        // console.warn('currentYear : ', this.currentYear);
        // console.warn('currentMonth : ', this.currentMonth);
        // console.warn('currentDay : ', this.currentDay);
    };

    getTimeAndDate = async () => {
        let res = await getTimeAndDate();

        if (res.state === 'success') {

            const timeAndDate = res.time.split(' ');
            let currentDate = timeAndDate[0].split('-');

            this.currentYear = parseInt(currentDate[0]);
            this.currentMonth = parseInt(currentDate[1]);
            this.currentDay = parseInt(currentDate[2]);

        }else {
            console.warn('Date Error : ')
        }
    }
}

decorate(TimeClass, {
    //observables
    currentMonth: observable,
    currentDay: observable,

    //actions
    setDateAndTime: action

});

const timeClass = new TimeClass();

export default timeClass;
