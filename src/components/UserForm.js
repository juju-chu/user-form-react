import React from 'react'
import useUserForm from '../hooks/useUserForm'
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    margin: 0 auto;

    .errors {
        color: red;
    }
`

export default function UserForm() {
    const userForm = useUserForm

    // 登入畫面範例
    const { handleChange, handleSubmit, values, errors } = userForm({
        initialValues: {
            account: '',
            password: '',
            rememberMe: false,
        },
        validation: (values) => {
            const errors = {}
            if (!values.account) {
                errors.account = '請輸入帳號'
            } else if (!values.password) {
                errors.password = '請輸入密碼'
            }
            return errors
        },
        onSubmit: (values) => console.table(values),
    })

    return (
        <Wrapper>
            <input
                name="account"
                onChange={handleChange}
                value={values.account}
                placeholder="Account"
            />{errors.account && (<div className="errors">{errors.account}</div>)}

            <input
                name="password"
                onChange={handleChange}
                value={values.password}
                placeholder="password"
            />{errors.password && (<div className="errors">{errors.password}</div>)}

            <label>
                <input
                    type="checkbox"
                    name="rememberMe"
                    onChange={handleChange}
                    checked={values.rememberMe}
                />Remember Me
            </label>
            <button onClick={handleSubmit}>Login</button>
        </Wrapper>
    )
}
