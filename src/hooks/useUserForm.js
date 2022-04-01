import { useState } from 'react'

export default function useUserForm(data) {
    const { initialValues, validation, onSubmit } = data
    const [values, setValues] = useState(initialValues);
    const errors = validation(values)

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'account':
                setValues({
                    ...values,
                    'account': e.target.value,
                })
                break;
            case 'password':
                setValues({
                    ...values,
                    'password': e.target.value,
                })
                break;
            case 'rememberMe':
                setValues({
                    ...values,
                    'rememberMe': e.target.checked,
                })
                break;
            default:
                console.log(`nothing`);
        }
    }
    
    const handleSubmit = () => {
        if ((Object.keys(errors)).length !== 0) {
            console.log('handleSubmit errors: ', errors)
            return
        }
        onSubmit(values)
    }

    return { handleChange, handleSubmit, values, errors }
}
