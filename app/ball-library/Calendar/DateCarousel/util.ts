import moment from 'moment-jalaali';
import memoize from 'fast-memoize';
// jalaali week days
export const jWeekdays = [
    'شنبه',
    'یکشنبه',
    'دوشنبه',
    'سه شنبه',
    'چهارشنبه',
    'پنج شنبه',
    'جمعه'
];
// jalaali months
export const jMonths = [
    'فروردین',
    'اردیبهشت',
    'خرداد',
    'تیر',
    'مرداد',
    'شهریور',
    'مهر',
    'آبان',
    'آذر',
    'دی',
    'بهمن',
    'اسفند'
];

export const generateMonthDaysArray = memoize(
    (days: number): number[] => {
        const arr = new Array(days);
        for (let index = 0; index < days; index++) {
            arr[index] = index + 1;
        }
        return arr;
    }
);
export const getJDayInMonth = memoize(
    (year: number, month: number): number => {
        // checks month and leap year and return days in month
        if (month <= 6) {
            return 31;
        } else if (month > 6 && month < 12) {
            return 30;
        } else if (month == 12) {
            if (moment.jIsLeapYear(year)) {
                return 30;
            } else {
                return 29;
            }
        } else {
            throw Error('year or month is not valid');
        }
    }
);
export const jToday = () => {
    const today = new moment().format('jYYYY,jM,jD');
    return {jYear: today.jYear, jMonth: today.jMonth, jDay: today.jDay};
};

interface MonthInfo {
    startOfMonth: number;
    jDayInMonth: number;
}

export const nextMonths = (monthIndex: number): Array<string> => {
    switch (monthIndex) {
        case 1:
            return ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        case 2:
            return ['اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        case 3:
            return ['خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        case 4:
            return ['تیر', 'مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        case 5:
            return ['مرداد', 'شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        case 6:
            return ['شهریور', 'مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        case 7:
            return ['مهر', 'آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        case 8:
            return ['آبان', 'آذر', 'دی', 'بهمن', 'اسفند'];
        case 9:
            return ['آذر', 'دی', 'بهمن', 'اسفند'];
        case 10:
            return ['دی', 'بهمن', 'اسفند'];
        case 11:
            return ['بهمن', 'اسفند'];
        case 12:
            return ['اسفند'];
        default:
            return ['Error']
    }
};
