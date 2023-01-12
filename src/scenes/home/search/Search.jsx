import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ImLocation2 } from 'react-icons/im'
import { MdOutlinePeopleOutline } from 'react-icons/md'
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoLocationOutline } from 'react-icons/io5'
// import v1 from '../../assets/v1.mp4'
// import v2 from '../../assets/v2.mp4'
// import v3 from '../../assets/v3.mp4'
// import v4 from '../../assets/v4.mp4'
// import v5 from '../../assets/v5.mp4'
import { MdArrowLeft, MdArrowRight } from 'react-icons/md'
import { DateRange } from 'react-date-range';
import { format } from 'date-fns';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useRef } from 'react';

const Search = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const [destination, setDestination] = useState("");
    const [opendate, setOpenDate] = useState(false);


    const toggle = (type) => {
        if (type === 'date') {
            setOpenDate(!opendate)
            setOpenOptions(false)
        } else if (type === 'option') {
            setOpenOptions(!openOptions)
            setOpenDate(false)
        } else if (type === "text") {
            setOpenDate(false)
            setOpenOptions(false)
        }
    }

    const [openOptions, setOpenOptions] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ])

    const [options, setOptions] = useState({
        adult: 1,
        children: 0,
        room: 1
    })


    const handleOption = (name, operation) => {
        setOptions((prev) => {
            return {
                ...prev, [name]: operation === "i" ? options[name] + 1 : options[name] - 1
            }
        })
    }

    const handleClick = direction => {
        if (direction == "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 5)
        } else {
            setSlideIndex(slideIndex < 5 ? slideIndex + 1 : 0)
        }
    }

    // useEffect(() => {
    //     const scrolling = setInterval(() => {
    //         setSlideIndex(prev => prev < 5 ? prev + 1 : 0)
    //     }, 5000);
    //     return () => {
    //         clearInterval(scrolling)
    //     }
    // })

    return (
        <Section>
            <div className="img">
                <div className="leftarrow" onClick={() => handleClick("left")}>
                    <MdArrowLeft />
                </div>
                <Wrapper slideIndex={slideIndex}>
                    <div className="slide">
                        <video loop autoPlay muted>
                            {/* <source src={v1} type="video/mp4"></source> */}
                        </video>
                    </div>
                    <div className="slide">
                        <video loop autoPlay muted>
                            {/* <source src={v2} type="video/mp4"></source> */}
                        </video>
                    </div>
                    <div className="slide">
                        <video loop autoPlay muted>
                            {/* <source src={v3} type="video/mp4"></source> */}
                        </video>
                    </div>
                    <div className="slide">
                        <video loop autoPlay muted>
                            {/* <source src={v4} type="video/mp4"></source> */}
                        </video>
                    </div>
                    <div className="slide">
                        <video loop autoPlay muted>
                            {/* <source src={v5} type="video/mp4"></source> */}
                        </video>
                    </div>
                    <div className="slide">
                        <video loop autoPlay muted>
                            {/* <source src={v2} type="video/mp4"></source> */}
                        </video>
                    </div>
                </Wrapper>
                <div className="rightarrow" onClick={() => handleClick("right")}>
                    <MdArrowRight />
                </div>
            </div>
            <div className="titles">
                <h1>Find you next destination</h1>
                <p>Get the best prices on 2,000,000+ properties, worldwide</p>
            </div>
            <div className="full">
                <div className="searchItem">
                    <IoLocationOutline className='icon' />
                    <div className="wrapper">
                        <label htmlFor="">Location</label>
                        <input type="text" onFocus={() => toggle("text")} onChange={e => setDestination(e.target.value)} placeholder='Where are you going?' className="searchInput" />
                    </div>
                </div>
                <div className="searchItem">
                    <AiOutlineCalendar className='icon' />
                    <div className="wrapper">
                        <label htmlFor="">Check In · Check out</label>
                        <span className="searchText" onClick={() => toggle("date")}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate, "dd/MM/yyyy")}`}</span>
                        {opendate && <DateRange editableDateInputs={true}
                            onChange={item => setDate([item.selection])}
                            moveRangeOnFirstSelection={false}
                            ranges={date}
                            minDate={new Date()}
                            className='date' />}
                    </div>
                </div>
                <div className="searchItem">
                    <MdOutlinePeopleOutline className='icon' />
                    <div className="wrapper">
                        <label htmlFor="">Guests</label>
                        <span className="searchText" onClick={() => toggle("option")}>{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
                        {openOptions && <div className='options'>
                            <div className="optionItem">
                                <span className="optionText">Adult</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "d")} disabled={options.adult <= 1}>-</button>
                                    <span className="optionCounterNumber">{options.adult}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("adult", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Children</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "d")} disabled={options.children <= 0}>-</button>
                                    <span className="optionCounterNumber">{options.children}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("children", "i")}>+</button>
                                </div>
                            </div>
                            <div className="optionItem">
                                <span className="optionText">Room</span>
                                <div className="optionCounter">
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "d")} disabled={options.room <= 1}>-</button>
                                    <span className="optionCounterNumber">{options.room}</span>
                                    <button className="optionCounterButton" onClick={() => handleOption("room", "i")}>+</button>
                                </div>
                            </div>
                        </div>}
                    </div>
                </div>
                <div className="searchItem">
                    <button className="headerBtn" >Search</button>
                </div>
            </div>
        </Section>
    );
}

export default Search;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: 0.5s ease-in-out;
`

const Section = styled.section`
    background-color: red;
    width: 100vw;
    height: 60vh;
    position: relative;
    display: flex;
    justify-content: center;
    .img{
        position: relative;
        width: 100vw;
        height: 100%;
        video{
            width: 100vw;
            height: 100%;
            object-fit: cover;
            filter: brightness(80%)
        }
    }

    .img .slide{
        width: 100%;
        height: 100%;
    }

    .img .leftarrow {
        position: absolute;
        z-index: 2;
        font-size: 20px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgba(218,222,222,0.5);
        cursor: pointer;
        top: 0;
        bottom: 0;
        left: 20px;
        margin: auto;
    }

    .img .rightarrow {
        position: absolute;
        z-index: 2;
        font-size: 20px;
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: rgba(218,222,222,0.5);
        cursor: pointer;
        top: 0;
        bottom: 0;
        right: 20px;
        margin: auto;
    }

    .titles{
        position: absolute;
        top: 0;
        bottom: 70vh;
        display: flex;
        flex-direction: column;
        height: 60vh;
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
        height: 10vh;
        background-color: white;
        z-index: 2;
        box-shadow: rgba(100,100,111,0.35) 5px 5px 5px;
        max-width: 80vw;
        position: absolute;
        bottom: -2.2rem;
        border-radius: 2rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-color: #f7fffa;
        .searchItem{
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            position: relative;
            .wrapper{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: space-between;
                gap: 0.4rem;
                label {
                    font-size: 1rem;
                    font-weight: 600;
                    color: #6949f5;
                }
            }
            .icon{
                color: #40439c;
                font-size: 1.2rem;
            }
            .searchInput{
                width: 100%;
                outline: none;
                padding: 0.2rem 1rem;
                background-color: transparent;
                border: 1px solid gray;
                border-radius: 2rem;
            }
            .date{
                position: absolute;
                top: 4.4rem;
                border: 1px solid black;
                padding: 0.6rem;
                left: -4vw;
                box-shadow: rgba(100,100,111,0.35) 5px 5px 5px;      
                border-radius: 5px;
            }

            .headerBtn{
                background-color: #0071c2;
                color: white;
                font-size: 1rem;
                font-weight: 500;
                border: none;
                padding: .9rem 3rem;
                border-radius: 3rem;
                cursor: pointer;
                box-shadow: rgba(100,100,111,0.35) 5px 5px 5px;
            }

            .options{
                position: absolute;
                top: 4.4rem;
                left: 0;
                background-color: white;
                border-radius: 5px;
                border: 1px solid black;
                box-shadow: rgba(100,100,111,0.35) 5px 5px 5px;      
                padding: 0.6rem;          
                .optionItem{
                    width: 200px;
                    display: flex;
                    justify-content: space-between;
                    margin: 10px;
                }

                .optionCounter{
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap:10px;
                    font-size: 12px;
                    color: black;
                }

                .optionCounterButton{
                    width: 30px;
                    height: 30px;
                    border: 1px solid #0071c2;
                    color: #0071c2;
                    cursor: pointer;
                    background-color: white;
                }

                .optionCounterNumber{
                    width: 10px;
                }

                .optionCounterButton:disabled{
                    cursor: not-allowed;
                }
            }
        }
    }    
`

