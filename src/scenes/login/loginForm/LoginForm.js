import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useFormik } from "formik";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuthLoginMutation, useAuthRegisterMutation } from '../../../store/services/authService';
import { setSuccess } from '../../../store/reducers/globalReducer';
import { basicSchema } from './basicSchema';

const LoginForm = () => {

    const [loginData, response] = useAuthLoginMutation();
    console.log(response);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = async (values, actions) => {
        loginData(values)
        actions.resetForm();
        response?.isSuccess ? navigate("/login") : navigate("/register");
    };

    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    useEffect(() => {
        if (response?.isSuccess) {
            dispatch(setSuccess(response?.data?.msg))
        }
    }, [response?.isSuccess]);

    return (
        <div>
            <Wrapper>
                <div className="register">
                    <h1>Login</h1>
                    <form className='inputs' onSubmit={handleSubmit} autoComplete="off">
                        <div className="input">
                            <label htmlFor="email">Email</label>
                            <div className="main">
                                <input
                                    value={values.email}
                                    onChange={handleChange}
                                    id="email"
                                    type="email"
                                    placeholder="Enter your email"
                                    onBlur={handleBlur}
                                    autoComplete='off'
                                    className={errors.email && touched.email ? "input-error" : ""}
                                />
                                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="password">Password</label>
                            <div className="main">
                                <input
                                    value={values.password}
                                    onChange={handleChange}
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    onBlur={handleBlur}
                                    autoComplete="off"
                                    className={errors.password && touched.password ? "input-error" : ""}
                                />
                                {errors.password && touched.password && <p className="error">{errors.password}</p>}
                            </div>
                        </div>
                        <button disabled={response.isLoading} type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </Wrapper>
        </div>
    );
}

export default LoginForm;

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    .register{
        box-sizing: border-box;
        border-radius: 1rem;
        height: 100%;
        width: 500px;
        background-color: rgba(244,244,244);
        padding: 2rem;
        padding-right: 3rem;
        margin-top: 3rem;
        overflow: hidden;
        h1{
            padding: 0;
            margin: 0;
            padding-bottom: 2rem;
        }
        .inputs{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1rem;
            button{
                padding: .5rem 1rem;
                font-size: 16px;
                font-weight: 600;
                color: black;
                cursor: pointer;
                margin-top: 1rem;
                border-radius: 1rem;
                background-color: aliceblue;
            }
            .input{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                gap: .4rem;
                .main{
                    display: flex;
                    width: 100%;
                    flex-direction: column;
                    input{
                        width: 100%;
                        border: 2px solid aqua;
                        outline: none;
                        padding: .4rem;
                        padding-left: 1rem;
                        font-size: 14px;
                        border-radius: 1rem;
                        &:focus {
                            border: 2px solid blue;
                            border-color: #4299e1;
                        }
                    }
                    .input-error{
                        border: 2px solid blue;
                        border-color: #fc8181;
                    }
                    .error{
                        margin: 0;
                        padding: 0;
                        font-size: .7rem;
                        padding-left: 1rem;
                        padding-top: 5px;
                        color: red;
                    }
                label{
                    font-size: 16px;
                    font-weight: 600;
                }
                }
                
            }
            button{
                width: 200px;
                background-color: white;
                border: 1px solid aqua;
                &:disabled {
                    opacity: 0.35;
                }
            }
        }
    }
    
`