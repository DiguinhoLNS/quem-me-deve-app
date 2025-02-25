import * as yup from 'yup'

export const formProfileValues = {
    name: '',
    pixKey: '',
}

export const formProfileSchema = yup.object().shape({
    name: yup.string().required('Campo obrigatório'),
    pixKey: yup.string().required('Campo obrigatório'),
})