// export interface WalletRes {
//     state: 'success' | 'failed',
//     walletRes: WalletPage,
//     message: string
// }

// export interface TransactionRes {
//     state: 'success' | 'failed',
//     transactions: Array<Transaction>,
//     message: string
// }

// export interface WalletPage {
//     uuid: string,
//     amount: number,
//     activeDiscount: 5000,
//     walletTransactions: Array<Transaction>,
// }

// export interface Transaction {
//     uuid: string,
//     amount: number,
//     transactionType: 'inc' | 'dec',
//     description: string | null,
//     createdAt: string,
// }

export interface TotalTransactionsRes {
    state: 'success' | 'failed',
    transactions: TotalTransactions,
    message: string
}

export interface TotalTransactions {
    amount: number,
    totalIncome: number,
}


export interface WalletTranRes {
    state: 'success' | 'failed',
    message: string
    transactions: Array<WalletTransactions>,
}

export interface WalletTransactions {
    uuid: string,
    count: number,
    reserve: {
        uuid: string,
        user: {
            name: string
        }
    },
    session: {
        uuid: string,
        date: string,
        sportType: string,
        adultType: null,
        qualityType: string,
        sessionTime: {
            startTime: string,
            endTime: string
        }
    }
}
