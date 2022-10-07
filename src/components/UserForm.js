import React, { useState, useEffect } from 'react'
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

const Child = () => {
    console.log('Child Render');
    const [name, updateName] = useState('Foo');

    useEffect(() =>{
        console.log('Child useEffect');
        updateName('Tom');
        return () => {
            console.log('Child Unmount');
        }
    }, [name]);
    console.log(name);
    return <div>Hello</div>
}

export default function UserForm() {
    console.log('Parent Render');
    // const userForm = useUserForm

    useEffect(() => {
        console.log('Parent useEffect');
    }, [])

    return <Child />;

    // 登入畫面範例
    // const { handleChange, handleSubmit, values, errors } = userForm({
    //     initialValues: {
    //         account: '',
    //         password: '',
    //         rememberMe: false,
    //     },
    //     validation: (values) => {
    //         const errors = {}
    //         if (!values.account) {
    //             errors.account = '請輸入帳號'
    //         } else if (!values.password) {
    //             errors.password = '請輸入密碼'
    //         }
    //         return errors
    //     },
    //     onSubmit: (values) => console.table(values),
    // })

    // return (
    //     <Wrapper>
    //         <input
    //             name="account"
    //             onChange={handleChange}
    //             value={values.account}
    //             placeholder="Account"
    //         />{errors.account && (<div className="errors">{errors.account}</div>)}

    //         <input
    //             name="password"
    //             onChange={handleChange}
    //             value={values.password}
    //             placeholder="password"
    //         />{errors.password && (<div className="errors">{errors.password}</div>)}

    //         <label>
    //             <input
    //                 type="checkbox"
    //                 name="rememberMe"
    //                 onChange={handleChange}
    //                 checked={values.rememberMe}
    //             />Remember Me
    //         </label>
    //         <button onClick={handleSubmit}>Login</button>
    //     </Wrapper>
    // )
}
