import { useState, useEffect } from 'react'

export default function useUserForm(data) {
    const { initialValues, validation, onSubmit } = data
    const [account, setAccount] = useState(initialValues.account)
    const [password, setPassword] = useState(initialValues.password)
    const [rememberMe, setRememberMe] = useState(initialValues.rememberMe)

    const values = {
        'account': account,
        'password': password,
        'rememberMe': rememberMe,
    }
    const errors = validation(values)

    const handleChange = (e) => {
        switch (e.target.name) {
            case 'account':
                setAccount(e.target.value)
                break;
            case 'password':
                setPassword(e.target.value)
                break;
            case 'rememberMe':
                setRememberMe(e.target.checked)
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

    useEffect(() => {
        values.account = account
    }, [account])

    useEffect(() => {
        values.password = password
    }, [password])

    useEffect(() => {
        values.rememberMe = rememberMe
    }, [rememberMe])

    return { handleChange, handleSubmit, values, errors }
}