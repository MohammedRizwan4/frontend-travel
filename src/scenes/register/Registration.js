import React, { useEffect, useState } from 'react';
import Navbar from '../home/navbar/Navbar';
import { useAuthRegisterMutation } from '../../store/services/authService';
import styled from 'styled-components';
import { useFormik } from "formik";
import { basicSchema } from './basicSchema';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSuccess } from '../../store/reducers/globalReducer';

const Registration = () => {

    const [loginData, response] = useAuthRegisterMutation();
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
            firstname: "",
            lastname: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    useEffect(() => {
      if(response?.isSuccess){
        dispatch(setSuccess(response?.data?.msg))
      }
    }, [response?.isSuccess]);

    return (
        <div>
            <Navbar />

            <Wrapper>
                <div className="register">
                    <h1>Register</h1>
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
                                    className={errors.email && touched.email ? "input-error" : ""}
                                />
                                {errors.email && touched.email && <p className="error">{errors.email}</p>}
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="firstname">First name</label>
                            <div className="main">
                                <input
                                    value={values.firstname}
                                    onChange={handleChange}
                                    id="firstname"
                                    type="text"
                                    placeholder="Enter your firstname"
                                    onBlur={handleBlur}
                                    className={errors.firstname && touched.firstname ? "input-error" : ""}
                                />
                                {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}
                            </div>

                        </div> <div className="input">
                            <label htmlFor="lastname">Last name</label>
                            <div className="main">
                                <input
                                    value={values.lastname}
                                    onChange={handleChange}
                                    id="lastname"
                                    type="text"
                                    placeholder="Enter your lastname"
                                    onBlur={handleBlur}
                                    className={errors.lastname && touched.lastname ? "input-error" : ""}
                                />
                                {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
                            </div>

                        </div> <div className="input">
                            <label htmlFor="password">Password</label>
                            <div className="main">
                                <input
                                    value={values.password}
                                    onChange={handleChange}
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    onBlur={handleBlur}
                                    className={errors.password && touched.password ? "input-error" : ""}
                                />
                                {errors.password && touched.password && <p className="error">{errors.password}</p>}
                            </div>
                        </div>
                        <div className="input">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <div className="main">
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm password"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={
                                        errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
                                    }
                                />
                                {errors.confirmPassword && touched.confirmPassword && (
                                    <p className="error">{errors.confirmPassword}</p>
                                )}
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

export default Registration;


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