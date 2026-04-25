import { FormatNumberOptions } from "react-native-currency-input"

const formatCurrencyOptions: FormatNumberOptions = {
    prefix: 'R$ ',
    delimiter: '.',
    separator: ',',
    precision: 2,
    signPosition: 'beforePrefix'
}

export default formatCurrencyOptions