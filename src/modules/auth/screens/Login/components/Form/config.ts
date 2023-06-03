import * as yup from 'yup'

export const formLoginValues = {
    login: '',
    senha: '',
}

export const formLoginSchema = yup.object().shape({
    login: yup.string().required('Campo obrigatório'),
    senha: yup.string().required('Campo obrigatório'),
})