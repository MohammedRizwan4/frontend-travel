import React from 'react';
import styled from 'styled-components';
import { ImLocation2 } from 'react-icons/im'
import { BiCalendar } from 'react-icons/bi'
import { IoIosPeople } from 'react-icons/io';

const Search = () => {
    return (
        <Section>
            <div className="img">
                <img src="https://modtel.travelerwp.com/wp-content/uploads/2022/04/Frame-3151-min.png" alt="" />
            </div>
            <div className="titles">
                <h1>Find you next destination</h1>
                <p>Get the best prices on 2,000,000+ properties, worldwide</p>
            </div>
            <div className="full">
                <div className="halfcontainer">
                    <div className="location">
                        <div className="icon"><ImLocation2 /></div>
                        <div className="mainlocation">
                            <div className="locationtitle">Location</div>
                            <input type="text" placeholder='Enter your destination' />
                        </div>
                    </div>
                    <div className="location">
                        <div className="icon"><BiCalendar /></div>
                        <div className="mainlocation">
                            <div className="locationtitle">Check In</div>
                            <input type="date" placeholder='Enter your destination' />
                        </div>
                    </div>
                    <div className="location">
                        <div className="icon"><BiCalendar /></div>
                        <div className="mainlocation">
                            <div className="locationtitle">Check Out</div>
                            <input type="date" placeholder='Enter your destination' />
                        </div>
                    </div>
                    <div className="location">
                        <div className="icon"><IoIosPeople /></div>
                        <div className="mainlocation">
                            <div className="locationtitle">Guests</div>
                            <input type="text" placeholder='Enter your destination' />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Search;

const Section = styled.section`
    background-color: red;
    padding-top: 12vh;
    width: 100vw;
    height: 70vh;
    position: relative;
    .img{
    position: relative;
        width: 100%;
        height: 100%;
        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            filter: blur(0.2rem);
        }
    }

    .titles{
        position: absolute;
        top: 0;
        margin-top: 10vh;
        display: flex;
        flex-direction: column;
        height: 70vh;
        justify-content: center;
        width: 100vw;
        text-align: center;
        h1{
            
            color: white;
            font-size: 5rem;
            margin: 0;
        }
        p{
            margin: 0;
            font-size: 1.5rem;
            font-weight: 700;
            color: white;
        }
    }

    .full{
        width: 100%;
        display: flex;
        justify-content: center;
        height: 12vh;
        background-color: white;
        z-index: 584;
        
        .halfcontainer{
            box-shadow: rgba(100,111,101,0.35) 5px 5px 5px;
        position: absolute;
        bottom: -3rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: white;
        width: 100vw;
        max-width: 80vw;
        padding: 1rem;
        border-radius: 3rem;
        .location{
            display: flex;
            justify-content: space-evenly;
            gap: 1rem;
            align-items: center;
            flex:1;
            border-right: 2px solid;
            border-right-color: blue;
            margin-right: 2rem;
            &:last-of-type{
                border-right: none;
            }
            .icon{
                font-size: 1.6rem;
                flex: 1;
            }
            .mainlocation{
                display: flex;
                justify-content: space-between;
                flex-direction: column;
                gap: 0.4rem;
                flex: 4;
                align-items: flex-start;
                .locationtitle{
                    font-size: 1.2rem;
                    padding-left: 0.5rem;
                    font-weight: 700;
                }
                input{
                    border: none;
                    outline: none;
                    padding: 0.5rem;
                    font-size: 1rem;
                }
            }
        }
    }
    }

    
`

