export interface CreateCharge {
    amount: number
    formattedAmount: string
    debtorName: string
    debtorCellphone: string | null
}