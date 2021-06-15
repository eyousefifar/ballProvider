export interface VerifyRes {
    state: 'success' | 'failed',
    message: string,
    type: 'confirmed' | 'expired' | 'notValid' | 'rejected' | 'used' | 'unknown',
    ticketInfo : TicketInfo | null
}

export interface Res {
    success: boolean,
    acceptStatus:boolean,
    sessionExpired:boolean,
    message: string
    // TODO : Change
    reserveItemCard : TicketInfo
}

export interface ChangeStateRes {
    state: 'success' | 'failed',
    message: string,
}



// export interface TranRes {
//     state: 'success' | 'failed',
//     message: string
//     transactions: Array<TicketInfo>,
// }

export interface TicketInfo {
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
