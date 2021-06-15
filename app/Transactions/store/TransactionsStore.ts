import {action, observable, computed, decorate} from 'mobx';
import {Transactions} from '../library/types'
import {getTransactions} from "../library/api";
import {auth, timeClass} from "../../ball-library";
import {ToastAndroid} from "react-native";
import {generateMonthDaysArray, getJDayInMonth, nextMonths} from "../../ball-library/Calendar/DateCarousel/util";


class TransactionsStore {
    // observables
    sportSiteId: string = '';
    monthIndex: number = 0;
    dayIndex: number = 0;
    transactions: Array<Transactions> = [];

    query: string = '';


    loading: boolean = false;
    miniLoading: boolean = false;

    pageNumber: number = 1;
    loadMoreLoading: boolean = false;
    neverLoadAgain: boolean = false;

    days: Array<number> = [];
    months: Array<string> = [];

    // functions
    get getTransactions(): Array<Transactions> {
        return this.transactions
    }


    // computed
    get isEmptyTransactions(): boolean {
        return this.transactions.length === 0
    }

    get isQueryEmpty(): boolean {
        return this.query === '';
    };


    //action
    setSportSiteId = (sportSiteId: string) => {
        this.sportSiteId = sportSiteId
    };

    setInitialDayAndMonth = () => {
        this.dayIndex = timeClass.currentDay - 1;
        this.monthIndex = timeClass.currentMonth - 1;

        const jDays = getJDayInMonth(timeClass.currentYear, timeClass.currentMonth);
        this.days = generateMonthDaysArray(jDays);
        this.months = nextMonths(timeClass.currentMonth)
    };

    setMonthIndex = (monthIndex: number) => {
        this.monthIndex = timeClass.currentMonth - 1 + monthIndex
    };
    setDayIndex = (dayIndex: number) => {
        this.dayIndex = dayIndex
    };

    setDays = () => {
        const jDays = getJDayInMonth(timeClass.currentYear, this.monthIndex + 1);
        this.days = generateMonthDaysArray(jDays);
    };

    setQuery = (text: string): void => {
        this.query = text;
    };


    getAllTransactions = async () => {
        this.transactions = [];
        this.miniLoading = true;
        let forbiddenDays = `${this.monthIndex + 1}/${this.dayIndex + 1}`;

        // console.warn('Today :',forbiddenDays);

        // console.warn('forbiddenDays : ',forbiddenDays)

        if (forbiddenDays != '7/31' && forbiddenDays != '8/31' && forbiddenDays != '9/31' && forbiddenDays != '10/31' &&
            forbiddenDays != '11/31' && forbiddenDays != '12/31' && forbiddenDays != '12/30') {

            let transRes = await getTransactions(auth.getToken(), this.sportSiteId, this.monthIndex, this.dayIndex, this.pageNumber, this.query);

            if (transRes.state === 'success') {
                this.transactions = transRes.transactions;

                // if result length is less than 20 never load more again
                if (transRes.transactions.length < 25) {
                    this.neverLoadAgain = true
                }

                this.loading = true;
                this.miniLoading = false
            } else {
                this.loading = true;
                this.miniLoading = false;

                ToastAndroid.show(transRes.message, ToastAndroid.SHORT)
            }
        } else
            this.miniLoading = false

    };

    loadMore = async () => {

        if (!this.neverLoadAgain && !this.loadMoreLoading) {
            console.warn('LoadMoreCalled : ');

            this.loadMoreLoading = true;
            let res = await getTransactions(auth.getToken(), this.sportSiteId, this.monthIndex, this.dayIndex, this.pageNumber + 1, this.query);

            if (res.state === 'success') {
                this.transactions = [...this.transactions, ...res.transactions];
                this.loadMoreLoading = false;
                if (res.transactions.length !== 0) {
                    this.pageNumber = this.pageNumber + 1
                } else
                    this.neverLoadAgain = true
            } else {
                this.loadMoreLoading = false;
            }
        }

    };

    resetPagination = () => {
        this.pageNumber = 1;
        this.loadMoreLoading = false;
        this.neverLoadAgain = false;
    };


    reset = () => {
        console.warn('reset Called !!');
        this.query = '';
        this.transactions = [];

        this.miniLoading = false;
        this.loading = false;

        this.resetPagination()
    };

}

decorate(TransactionsStore, {
    // observables
    sportSiteId: observable,

    monthIndex: observable,
    dayIndex: observable,

    transactions: observable,

    loading: observable,
    miniLoading: observable,

    days: observable,
    months: observable,

    query:observable,

    pageNumber: observable,
    loadMoreLoading: observable,
    neverLoadAgain: observable,

    // computed
    isEmptyTransactions: computed,
    isQueryEmpty: computed,

    // actions
    setMonthIndex: action,
    setDayIndex: action,
    setDays: action,
    getAllTransactions: action,

    setQuery: action,

    loadMore: action,

    resetPagination: action,
    reset: action,
});

export const transactionsStore = new TransactionsStore();
