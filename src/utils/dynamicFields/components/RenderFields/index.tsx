import React from 'react'
import Section from '@components/Layout/Section'
import FormDate from '@components/Common/Form/components/Date'
import FormInput from '@components/Common/Form/components/Input'
import FormSelect from '@components/Common/Form/components/Select'
import { RenderFieldsProps } from './types'

const RenderFields: React.FC <RenderFieldsProps> = ({ fields, values, errors, setFieldValue }) => {

    return(

        <>
            {fields.map((item, index) => (
                <Section key = {index} marginBottom = {index === fields.length - 1 ? 0 : 32}>
                    {(() => {
                        const commonProps = {
                            label: item.label,
                            field: item.controllerName,
                            value: values[item.controllerName],
                            error: !!errors[item.controllerName],
                        }

                        if(['text', 'textArea'].includes(item.tipo)){
                            return(
                                <FormInput
                                    {...commonProps}
                                    lines = {item.tipo === 'textArea' ? 5 : undefined}
                                    onChange = {setFieldValue}
                                />
                            )
                        }
                        if(['datetime'].includes(item.tipo) && values[item.controllerName]){
                            return(
                                <FormDate
                                    {...commonProps}
                                    setFieldValue = {setFieldValue}
                                />
                            )
                        }
                        if(['selectded'].includes(item.tipo)){
                            return(
                                <FormSelect
                                    {...commonProps}
                                    data = {item.valores ?? []}
                                    setFieldValue = {setFieldValue}
                                />
                            )
                        }
                    })()}
                </Section>
            ))}
        </>

    )

}

export default RenderFields