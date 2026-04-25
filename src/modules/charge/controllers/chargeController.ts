import { Share } from 'react-native'
import uuid from 'react-native-uuid'
import { Theme } from "@modules/theme/interfaces/Theme"
import { DispatchType } from "@redux/interfaces"
import info from '@utils/info'
import { formatCurrency } from '@utils/format'
import { createLocalFunctions } from '@utils/local'
import { Charge } from "../interfaces/Charge"
import { CreateCharge } from "../interfaces/CreateCharge"
import { resetCurrentCreateCharge } from "../reducers/createChargeReducer"
import { checkCharge, deleteCharge, newCharge, setChargeList, toggleFixedCharge, updateCharge } from '../reducers/chargeReducer'

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
        dtCreated: new Date().toISOString(),
        // dtCreated: '2025-02-22T18:14:07.971Z',
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

    return charges.filter(f => !f.dtPaid).reduce((acc, cur) => cur.amount > acc ? cur.amount : acc, 0)
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

export function getChargeTheme(charge: Charge, theme: Theme){
    if(charge.dtPaid){
        return {
            color: theme.colors.onSuccess,
            background: theme.colors.success,
            onContainer: theme.colors.onSuccessContainer,
            container: theme.colors.successContainer,
        }
    }

    return {
        color: theme.colors.onWarning,
        background: theme.colors.warning,
        onContainer: theme.colors.onWarningContainer,
        container: theme.colors.warningContainer,
    }
}

export async function handleShare(dispatch: DispatchType, charge: Charge){
    await shareCharge(charge)
}

export function handleCheck(dispatch: DispatchType, charge: Charge){
    dispatch(checkCharge(charge.uuid))
}

export function handleDelete(dispatch: DispatchType, charge: Charge, redirect?: () => void){
    if(!!redirect) redirect()

    dispatch(deleteCharge(charge.uuid))
}

export function handleToggleFixed(dispatch: DispatchType, charge: Charge){
    dispatch(toggleFixedCharge(charge.uuid))
}

export function handleUpdate(dispatch: DispatchType, charge: Charge){
    const newCharge = {
        ...charge,
        formattedAmount: formatCurrency(charge.amount),
    }

    dispatch(updateCharge(newCharge))
}

function calcularCRC16(payload: string){
    let crc = 0xFFFF
    for (let i = 0; i < payload.length; i++) {
        crc ^= payload.charCodeAt(i) << 8
        for (let j = 0; j < 8; j++) {
            crc = (crc & 0x8000) ? (crc << 1) ^ 0x1021 : crc << 1
        }
    }
    return (crc & 0xFFFF).toString(16).toUpperCase().padStart(4, "0")
}
  
function formatarCampo(id: string, valor: string){
    const tamanho = valor.length.toString().padStart(2, "0")
    return id + tamanho + valor
}

export function generatePixCode(
    chave: string,
    valor: number,
    nome: string,
    cidade: string,
    txid?: string
){
    nome = nome.substring(0, 25)
    cidade = cidade.substring(0, 15)

    const payloadSemCRC = [
        "000201", // Payload Format Indicator
        formatarCampo("26", formatarCampo("00", "BR.GOV.BCB.PIX") + formatarCampo("01", chave)), // Chave Pix no campo correto
        "52040000", // Merchant Category Code (MCC) - padrão
        "5303986", // Moeda (986 = BRL)
        valor ? formatarCampo("54", valor.toFixed(2)) : "", // Valor (opcional)
        "5802BR", // País
        formatarCampo("59", nome), // Nome do recebedor
        formatarCampo("60", cidade), // Cidade do recebedor
        txid ? formatarCampo("62", formatarCampo("05", txid)) : "", // TXID (opcional)
        "6304", // Placeholder do CRC16
    ].join("")

    const crc16 = calcularCRC16(payloadSemCRC)
    return payloadSemCRC + crc16
}