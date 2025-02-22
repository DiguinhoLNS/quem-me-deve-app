import { FormatNumberOptions } from "react-native-currency-input"

const formatCurrencyOptions: FormatNumberOptions = {
    separator: ',',
    prefix: 'R$',
    precision: 2,
    delimiter: '.',
    signPosition: 'beforePrefix'
}

export default formatCurrencyOptions