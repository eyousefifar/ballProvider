export interface DrawerReservesRes {
    state:'success'|'failed',
    message:string,
    reserves:Array<IReserveItem>,
}

export interface IReserveItem {
    uuid: string,
    code: string,
    reserve: {
        uuid: string,
        sportSite: {
            name:string,
            mainPicUrl: string,
            address: {
                area: string
            }
        }
    },
    session: {
        date: string,
        sessionTime: {
            startTime: string
        }
    }
}

export interface DrawerNotificationsRes {
    state:'success'|'failed',
    message:string,
    notifications:Array<Notif>,
}

export interface Notif {
    uuid: string,
    title: string,
    content: string,
    createdAt: string,
}
