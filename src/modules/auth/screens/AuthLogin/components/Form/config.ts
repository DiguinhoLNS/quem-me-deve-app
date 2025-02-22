import * as yup from 'yup'

export const formLoginValues = {
    login: '',
    password: '',
}

export const formLoginSchema = yup.object().shape({
    login: yup.string().required('Campo obrigatório'),
    password: yup.string().required('Campo obrigatório'),
})