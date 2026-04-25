export interface Charge {
    uuid: string
    amount: number
    formattedAmount: string
    debtorName: string
    debtorCellphone: string | null
    dtCreated: string
    dtPaid: string | null
    fixed: boolean
}