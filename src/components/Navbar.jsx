import React, { useState } from 'react';
import styled from 'styled-components';
import { VscThreeBars } from 'react-icons/vsc';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);

    const handleClick = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <Nav>
                <div className="main_nav">
                    <div className="logo">
                        Pack & Go
                    </div>
                    <div className="toggle">
                        <VscThreeBars onClick={handleClick}/>
                    </div>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <div className="auth">
                        <button>Login</button>
                        <button>Register</button>
                    </div>
                </div>
            </Nav>
            <List toggle={toggle}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </List>
        </>

    );
}

export default Navbar;

const Nav = styled.nav`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 12vh;
    background-color: white;
    position: fixed;
    top: 0;
    z-index: 584;
    .main_nav{
        max-width: 80vw;
        width: 80vw;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .toggle{
            display: none;
        }
        .logo{
            font-size: 35px;
            font-weight: 900;
            transition: 0.3s ease-in-out;
            padding: 0.2rem 1rem;
            border-radius: 2rem;
            cursor: pointer;
            &:hover{
                box-shadow: rgba(100,100,111,0.35) 5px 5px 5px;
                background-color: aliceblue;
                color: black;
            }
        }
        ul{
            display: flex;
            justify-content: space-between;
            width: 30vw;
            li{
                list-style-type: none;
                font-size: 1.1rem;
                font-weight: 500;  
                a{
                    transition: 0.3s ease-in-out;
                    &:hover{
                        color: blue;
                    }
                    color: black;
                    text-decoration: none;
                }
            }
        }
        .auth{
            display: flex;
            align-items: center;
            width: 10vw;
            gap: 2rem;
            button{
                border: none;
                border-radius: 1.4rem;
                background-color: transparent;
                font-size: 1rem;
                font-weight: bold;
                text-transform: uppercase;
                padding: 1rem 1.4rem;
                transition: 0.3s ease-in-out;
                cursor: pointer;
                &:hover{
                    background-color: rgba(126,148,228);
                    color: white;
                    box-shadow: rgba(100,100,111,0.35) 5px 5px 5px;
                }
            }
        }
    }

    @media all and (min-width: 320px) and (max-width: 720px){
        width: 100vw;
        padding: 0;
        height: 8vh;
        margin: 0;
        .main_nav{
            width: 100%;
            .logo{
                padding: 0;
                margin: 0;
                font-size: 1.3rem;
                font-weight: 700;
            }
            .toggle{
                display: block;
                font-size: 1.4rem;
            }
            ul{
                display: none;
            }
            .auth{
                display: none;
            }
        }
    }
`




const List = styled.div`
    display: ${(props) => (props.toggle ? "block" : "none")};
    margin-top: 8vh;
    /* transition: 0.3s ease-in-out;
    top: ${props => (props.toggle ? "1px" : "-600px")}; */
    ul{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        li{
            list-style-type: none;
            a{
                text-decoration: none;
                color: black;
                font-size: 1rem;
                font-weight: 600;
            }
        }
    }
`