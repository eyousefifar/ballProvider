export interface DeviceIdRes {
    state: 'success'|'failed',
    message:string
}

export interface SportSitesDataRes {
    state : 'success' | 'failed',
    message : string,
    sportSitesData : Array<SportSiteData>
}

export interface SportSiteData {
    uuid: string,
    name: string,
    description: string,
    playgroundInformation: {},
    type: string,
    sportTypes: Array<string>,
    genderTypes: Array<string>,
    rateCount: number,
    rateAvg: number,
    maxDiscountPrecent: number | null,
    maxDiscountExpireDate: null,
    minPrice: number,
    mainPicUrl: string,
    enableStatus: boolean,
    isValidDiscount: boolean,
    address: {
        uuid: string,
        city: string,
        area: string,
        descriptiveAddress: string,
        coordinateAddress: Array<number>,
    }
}

export interface RefreshTokenRes {
    state: 'success'|'failed',
    message:string,
}
