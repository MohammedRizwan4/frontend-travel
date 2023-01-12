import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useAuthRegisterMutation } from '../../../store/services/authService';


const LoginForm = () => {

    const [loginData,response] = useAuthRegisterMutation();
    // const [loading, setLoading] = useState(false);
    console.log(response);

    const [state, setState] = useState({
        email: "",
        firstname: "",
        lastname: "",
        password: ""
    });

    const registerHandler = (e) => {
        e.preventDefault();
        loginData(state)
    }

    const handleInput = e => {
        setState({ ...state, [e.target.name]: e.target.value })
    }

    // useEffect(() => {
    //   if(response?.isLoading) {
    //     setLoading(true);
    //   } else{
    //     setLoading(false)
    //   }
    // }, [response?.isLoading]);

    return (
        <Wrapper>
            <input type="text" onChange={e => handleInput(e)} value={state.email} name='email' placeholder='Enter your email' />
            <input type="text" onChange={e => handleInput(e)} value={state.firstname} name='firstname' placeholder='First Name' />
            <input type="text" onChange={e => handleInput(e)} value={state.lastname} name='lastname' placeholder='Last Name' />
            <input type="password" onChange={e => handleInput(e)} value={state.password} name='password' placeholder='Enter strong password' />
            <button onClick={(e) => registerHandler(e)}>Register</button>
            {
                response?.isLoading && <div>
                    Loading....
                </div>
            }
        </Wrapper>
    );
}

export default LoginForm;

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    input{
        width: 200px;
    }
    button{
        width: 200px;
    }
`