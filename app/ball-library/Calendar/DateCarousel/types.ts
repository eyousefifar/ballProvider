export type jMonths =
  | 'فروردین'
  | 'اردیبهشت'
  | 'خرداد'
  | 'تیر'
  | 'مرداد'
  | 'شهریور'
  | 'مهر'
  | 'آبان'
  | 'آذر'
  | 'دی'
  | 'بهمن'
  | 'اسفند';

export interface IDateCarousel {
  mode: 'day' | 'month' | 'year';
}
export interface IDateItem {
  mode: 'day' | 'month';
  value: string | number;
}

export interface IDateList {
  mode: 'day' | 'month';

  data: string[];
}
