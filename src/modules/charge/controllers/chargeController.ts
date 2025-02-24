import { Share } from 'react-native'
import uuid from 'react-native-uuid'
import { DispatchType } from "@redux/interfaces"
import info from '@utils/info'
import { formatCurrency } from '@utils/format'
import { createLocalFunctions } from '@utils/local'
import { Charge } from "../interfaces/Charge"
import { CreateCharge } from "../interfaces/CreateCharge"
import { newCharge, setChargeList } from '../reducers/chargeReducer'
import { resetCurrentCreateCharge } from "../reducers/createChargeReducer"

export const localCharge = {
    ...createLocalFunctions('chargeList', setChargeList)
}

export function createCharge(
    dispatch: DispatchType,
    createdCharge: CreateCharge,
    onCreate?: () => void
){
    dispatch(resetCurrentCreateCharge())

    const createdNewCharge: Charge = {
        ...createdCharge,
        uuid: uuid.v4(),
        // dtCreated: new Date().toISOString(),
        dtCreated: '2025-02-22T18:14:07.971Z',
        dtPaid: null,
        fixed: false,
    }

    dispatch(newCharge(createdNewCharge))

    if(onCreate) onCreate()

    return createdNewCharge
}

export async function shareCharge(charge: Charge){
    try {
        await Share.share({
            title: 'Nova cobrança',
            message: `Você tem uma cobrança de ${charge.formattedAmount}`,
        })
    } catch (error) {
        info.error('shareCharge', error)
    }
}

export function countChargeAmounts(charges: Charge[] | null){
    if(!charges) return 0

    return charges.reduce((acc, cur) => acc + cur.amount, 0)
}

export function countChargePaidAmounts(charges: Charge[] | null){
    if(!charges) return 0

    return charges.reduce((acc, cur) => cur.dtPaid ? acc + cur.amount : acc, 0)
}

export function countChargeUnpaidAmounts(charges: Charge[] | null){
    if(!charges) return 0

    return charges.reduce((acc, cur) => !cur.dtPaid ? acc + cur.amount : acc, 0)
}

export const chargeBiggestAmount = (charges: Charge[] | null) => {
    if(!charges) return 0

    return charges.reduce((acc, cur) => cur.amount > acc ? cur.amount : acc, 0)
}

export const chargeBiggestDebtor = (charges: Charge[] | null) => {
    if (!charges) return { name: '', amount: formatCurrency(0) }

    let biggestDebtor = { name: '', amount: 0 }
    const devedorMap = new Map<string, number>()

    charges.forEach(({ debtorName, amount, dtPaid }) => {
        if(!dtPaid){
            devedorMap.set(debtorName, (devedorMap.get(debtorName) || 0) + amount)
        }
    })

    devedorMap.forEach((total, name) => {
        if(total > biggestDebtor.amount){
            biggestDebtor = { name, amount: total };
        }
    })

    return { name: biggestDebtor.name, amount: formatCurrency(biggestDebtor.amount) }
}

export const getChargeOverview = (charges: Charge[] | null) => {
    return {
        total: formatCurrency(countChargeAmounts(charges)),
        paid: formatCurrency(countChargePaidAmounts(charges)),
        unpaid: formatCurrency(countChargeUnpaidAmounts(charges)),
        biggestAmount: formatCurrency(chargeBiggestAmount(charges)),
        biggestDebtor: chargeBiggestDebtor(charges),
    }
}