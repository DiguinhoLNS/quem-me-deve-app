import { Charge } from "@modules/charge/interfaces/Charge"

export interface ChargeItemProps {
    data: Charge
    onPress: () => void
}