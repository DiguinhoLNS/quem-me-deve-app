import * as yup from 'yup'

export const  formCreateChargeValueValues = {
    amount: 0,
}

export const  formCreateChargeValueSchema = yup.object().shape({
    amount: yup.number().required('Campo obrigatório'),
})