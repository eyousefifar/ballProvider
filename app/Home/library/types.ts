export interface SportSitesDataRes {
    state : 'success' | 'failed',
    message : string,
    sportSitesData : Array<SportSiteData>
    // sportSitesData : Array<number>
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


