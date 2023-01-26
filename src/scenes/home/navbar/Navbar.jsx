import React, { useState } from 'react';
import styled from 'styled-components';
import { VscThreeBars } from 'react-icons/vsc';
import './navbar.css';
import { Link } from 'react-router-dom';
import { AiFillCaretDown } from 'react-icons/ai';

const Navbar = () => {

    const [toggle, setToggle] = useState(false);
    const [packageOpener, setPackageOpener] = useState(false);

    const packageOpen = () => {
        setPackageOpener(!packageOpener);
        console.log("hello");
    }

    const handleClick = () => {
        setToggle(!toggle)
    }

    const packageClose = () => {
        setPackageOpener(!packageOpener);
        console.log("close");
    }


    return (
        <>
            <Nav>
                <div className="main_nav">
                    <Link to="/" className='text-none'>
                        <div className="logo">
                            Pack & Go
                        </div>
                    </Link>
                    <div className="toggle">
                        <VscThreeBars onClick={handleClick} />
                    </div>
                    <ul>
                        <li><Link to="/" className='text-none'>Home</Link></li>
                        <li className='package'><Link to="/theme">Packages<AiFillCaretDown className='icon' /></Link>
                            <div className='pacOpen'>
                                <ul>
                                    <li><a href="#">Perfect for youngsters</a></li>
                                    <li><a href="#">Hello</a></li>
                                    <li><a href="#">Hello</a></li>
                                    <li><a href="#">Hello</a></li>
                                </ul>
                            </div>
                        </li>

                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <div className="auth">
                        <Link to="/login"><button>Login</button></Link>
                        <Link to="/register"><button>Register</button></Link>
                    </div>
                </div>
            </Nav>
            <List toggle={toggle}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Packages</a></li>
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
    margin: auto;  
    display: flex; 
    justify-content: center; 
    height: 10vh; 
    background-color: #f7fffa;
    z-index: 584; 
    top: 12px;
    box-sizing: border-box; 
    .main_nav{
        max-width: 80vw; 
        width: 80vw; 
        display: flex; 
        justify-content: space-between; 
        box-sizing: border-box; 
        align-items: center; 
        height: 100%; 
        .text-none{
            text-decoration: none; 
        }
        .toggle{
            display: none; 
        }
        .logo{
            color: black; 
            font-size: 35px; 
            font-weight: 900;
            transition: 0.3s ease-in-out; 
            padding: 0.2rem 1rem; 
            border-radius: 1rem;
            cursor: pointer; 
            text-decoration: none; 
            &:hover{
                box-shadow: rgba(100,100,111,0.35) 5px 5px 5px;
                background-color: aliceblue;
                color: black;
            }
        }
        ul{
            display: flex;
            justify-content: space-between;
            box-sizing: border-box;
            width: 38vw;
            position: relative;
            height: 100%;
            .pacOpen{
                position: absolute;
                display: none;
                height: 300px; 
                width: 250px; 
                background-color: white;    
                top: 70px; 
                border-radius: .4rem;
                box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
                left: 140px;
                z-index: 999;
                
                ul{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    padding: 0;
                    margin: 0;
                    padding-bottom: .6rem;
                    li{
                        list-style-type: none;
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        padding: 0;
                        padding-left: 1.5rem;
                        .text-none{
                            text-decoration: none;
                        }
                        a{
                            display: flex;
                            align-items: center;
                            justify-content: flex-start;
                            color: black;
                            &:hover{
                                color: blue;
                            }
                        }
                    }
                }
            }
            .package:hover .pacOpen{
                display: block;
            }
            li{
                display: flex;
                align-items: center;
                justify-content: center;
                list-style-type: none;
                box-sizing: border-box;
                padding: 1.2rem;
                font-size: 1.1rem;
                height: 100%;
                width: 100%;
                font-weight: 500;  
                height: 100%;
                cursor: pointer;
                
                &:hover a{
                    color: blue;
                }
                a{
                    transition: 0.1s ease-in-out;
                    height: 100%;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    color: black;
                    text-decoration: none;
                    gap: .3rem;
                    .icon{
                        font-size: 13px;
                    }
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
                border-radius: 1rem;
                background-color: transparent;
                font-size: 1rem;
                font-weight: bold;
                text-transform: uppercase;
                padding: .5rem 1.8rem;
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