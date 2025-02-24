import { Charge } from "@modules/charge/interfaces/Charge"

export interface ChargeItemProps {
    data: Charge
    showActions?: boolean
    onPress: () => void
}