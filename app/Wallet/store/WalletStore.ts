import {action, observable, computed, decorate} from 'mobx';
import {getTotalTransactions, getWalletTransactions} from "../library/api";
import {auth} from "../../ball-library";
import {ToastAndroid} from "react-native";
import {WalletTransactions} from "../library/types";


class WalletStore {
    // observables
    sportSiteId: string = '';
    amount: number = 0;
    totalIncome: number = 0;
    transactions: Array<WalletTransactions> = [];

    loading: boolean = false;
    miniLoading: boolean = false;

    // computed
    get isEmptyTransactions(): boolean {
        return this.transactions.length === 0
    }


    //action
    setSportSiteId = (sportSiteId: string) => {
        this.sportSiteId = sportSiteId
    };


    getAllTransactions = async () => {
        this.amount = 0;
        this.totalIncome = 0;
        this.transactions = [];
        this.miniLoading = true;

        const promises = [
            await getWalletTransactions(auth.getToken(),this.sportSiteId),
            await getTotalTransactions(auth.getToken(), this.sportSiteId)
        ];


        Promise.all(promises).then(data => {
            if (data[0].state === 'success' && data[1].state === 'success'){

                // @ts-ignore
                this.transactions = data[0].transactions;

                // @ts-ignore
                this.amount = data[1].transactions.amount;
                // @ts-ignore
                this.totalIncome = data[1].transactions.totalIncome;

                this.loading = true;
                this.miniLoading = false;
            }else {
                this.loading = true;
                this.miniLoading = false;

                ToastAndroid.show(data[1].message, ToastAndroid.SHORT)
            }
        });
    };

    reset = () => {
        this.amount = 0;
        this.totalIncome = 0;

        this.loading = false;
        this.miniLoading = false;
        this.transactions = [];
    }

}

decorate(WalletStore, {
    // observables
    amount: observable,
    totalIncome: observable,
    transactions: observable,

    loading: observable,
    miniLoading: observable,

    // computed
    isEmptyTransactions: computed,

    // actions
    setSportSiteId: action,
    getAllTransactions: action,

    reset: action,
});

export const walletStore = new WalletStore();
