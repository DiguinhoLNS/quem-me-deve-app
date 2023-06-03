import * as yup from 'yup'
import { Field } from "@interfaces/Field"

function findField(fields: Field[], key: string){
    return fields.find(({ controllerName }) => controllerName === key)!
}

export function createDynamicFieldsFormValues(fields: Field[]){
    const keys = fields.map(item => item.controllerName)
    const formValues = Object.fromEntries(keys.map(item => 
        [item, findField(fields, item).tipo === 'datetime' ? new Date() : '']
    ))

    return formValues
}

export function createDynamicFieldsFormSchema(fields: Field[]){
    const keys = fields.map(item => item.controllerName)
    const formShape = Object.fromEntries(keys.filter(f => findField(fields, f).flagObrigatorio === true).map(item => 
        [item, yup[findField(fields, item).tipo === 'datetime' ? 'date' : 'string']().required(`Preencha ${findField(fields, item).label}`)]
    ))

    return yup.object().shape(formShape)
}