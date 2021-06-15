import {action, computed, decorate, observable} from "mobx";
import {getSanes} from "../library/api";
import {ToastAndroid} from "react-native";
import {SansList} from "../library/types";
import {auth, connectivity, timeClass, userProfile} from "../../ball-library";
import {generateMonthDaysArray, getJDayInMonth, nextMonths} from "../../ball-library/Calendar/DateCarousel/util";


class SportReservationStore {
    sportId: string = '';
    monthIndex: number = 0;
    dayIndex: number = 0;
    loading: boolean = false;
    sansesList: Array<SansList> = [
        /*{
            uuid: 'string',
            startTime: '07:30:00',
            endTime: '09:30:00',
            sportSiteUUID: 'fce21e8f-dfa1-41bd-9722-635dc2a04c63',
            sessions: [
                {
                    uuid: "492cc31c-c234-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-fffd-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-i234-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-lj34-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-fdd34-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: false,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
            ]
        },
        {
            uuid: 'string',
            startTime: '09:30:00',
            endTime: '11:30:00',
            sportSiteUUID: 'fce21e8f-dfa1-41bd-9722-635dc2a04c63',
            sessions: [
                {
                    uuid: "492cc31c-c234-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-fffd-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-i234-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-lj34-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-fdd34-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: false,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
            ]
        },
        {
            uuid: 'string',
            startTime: '11:30:00',
            endTime: '13:30:00',
            sportSiteUUID: 'fce21e8f-dfa1-41bd-9722-635dc2a04c63',
            sessions: [
                {
                    uuid: "492cc31c-c234-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-fffd-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-i234-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-lj34-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-fdd34-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: false,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
            ]
        },
        {
            uuid: 'string',
            startTime: '13:30:00',
            endTime: '15:30:00',
            sportSiteUUID: 'fce21e8f-dfa1-41bd-9722-635dc2a04c63',
            sessions: [
                {
                    uuid: "492cc31c-c234-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-fffd-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 10,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 90,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-i234-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: true,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-lj34-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: false,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
                {
                    uuid: "492cc31c-fdd34-4778-b024-1c852b3a9dd7",
                    date: "2020-02-07",
                    capacity: 100,
                    price: 10000,
                    discountPrecent: null,
                    discountExpireDate: null,
                    reservesCount: 0,

                    genderType: 'مرد',
                    sportType: "فوتسال",
                    adultType: null,
                    qualityType: "معمولی",
                    information: null,
                    enableStatus: false,

                    lockAt: null,
                    reserveLimit: 100,
                    isValidDiscount: null
                },
            ]
        },*/
    ];

    miniLoading: boolean = false;

    days: Array<number> = [];

    months: Array<string> = [];

    //computed
    get isEmptyReserve(): boolean {
        return this.sansesList.length === 0
    }

    //action
    setSportId = (sportId: string) => {
        this.sportId = sportId
    };

    setInitialDayAndMonth = () => {
        this.monthIndex = timeClass.currentMonth - 1;
        this.dayIndex = timeClass.currentDay - 1;

        console.warn('Current Month :', this.monthIndex);
        console.warn('Current Day :', this.dayIndex);

        const jDays = getJDayInMonth(timeClass.currentYear, timeClass.currentMonth);

        this.days = generateMonthDaysArray(jDays);
        this.months = nextMonths(timeClass.currentMonth)
    };
    setMonthIndex = (monthIndex: number) => {
        this.monthIndex = timeClass.currentMonth - 1 + monthIndex;
        // console.warn('selected month : ', this.monthIndex)
    };
    setDayIndex = (dayIndex: number) => {
        this.dayIndex = dayIndex
    };


    compareDate = (month1: number, month2: number, day1: number, day2: number): boolean => {
        if (month1 > month2) {
            return true
        } else if (month1 === month2) {
            return day1 >= day2;
        } else {
            return false
        }
    };


    getAllReserveList = async () => {
        if (connectivity.isConnected) {
            this.sansesList = [];
            this.miniLoading = true;

            // console.warn('I Called !!')

            let compare = this.compareDate((this.monthIndex + 1), (timeClass.currentMonth), (this.dayIndex + 1), (timeClass.currentDay));


            let selectedDay = `${this.monthIndex + 1}/${this.dayIndex + 1}`;
            // console.warn('Selected Day : ', selectedDay);


            if (selectedDay !== '7/31' && selectedDay !== '8/31' && selectedDay !== '9/31' && selectedDay !== '10/31' &&
                selectedDay !== '11/31' && selectedDay !== '12/31' && selectedDay !== '12/30' && compare) {

                // let id = await userProfile.sportSiteIds[0];
                let res = await getSanes(auth.getToken(), this.sportId, this.monthIndex, this.dayIndex);

                if (res.state === 'success') {
                    this.sansesList = res.sanses;
                    this.miniLoading = false;
                    this.loading = true

                } else {
                    ToastAndroid.show(res.message, ToastAndroid.SHORT);
                    this.miniLoading = false;
                    this.loading = true
                }


            } else {
                this.loading = true;
                this.miniLoading = false
            }
        } else {
            ToastAndroid.show('خطای اتصال به اینترنت', ToastAndroid.SHORT)
        }
    };


    setDays = () => {
        const jDays = getJDayInMonth(timeClass.currentYear, this.monthIndex + 1);
        // console.warn('Month days', jDays);

        this.days = generateMonthDaysArray(jDays);
    };


    reset = () => {
        this.sansesList = [];
    };
}

decorate(SportReservationStore, {
    // observables
    sportId: observable,
    monthIndex: observable,
    dayIndex: observable,
    loading: observable,
    sansesList: observable,

    miniLoading: observable,

    days: observable,
    //test
    months: observable,


    // computed
    isEmptyReserve: computed,

    // actions
    setSportId: action,
    setMonthIndex: action,
    setDayIndex: action,
    setInitialDayAndMonth: action,

    setDays: action,

    getAllReserveList: action,

});

export const sportReservationStore = new SportReservationStore();
