export interface SansesRes {
    state: 'success' | 'failed',
    sanses: Array<SansList>,
    message:string
}

export interface SansList {
    uuid: string,
    startTime: string,
    endTime: string,
    sportSiteUUID: string,
    sessions: Array<Sans>
}

export interface Sans {
    uuid: string,
    date: string,
    capacity: number,

    price: number,
    discountPrecent: number | null,
    discountExpireDate: string | null,
    reservesCount: number,

    genderType: string,
    sportType: string,
    adultType: string | null,
    qualityType: string,
    information: string | null,
    enableStatus: boolean,

    lockAt: string | null,
    reserveLimit: number,
    isValidDiscount: boolean | null
}



export interface ChangeStateRes {
    state: 'success' | 'failed',
    message:string
}
