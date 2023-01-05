import React, { useState } from 'react';
import styled from 'styled-components';
import city1 from '../../assets/topdestination/shimla.jpg'
import t1 from '../../assets/topdestination/t1.jpg';
import t2 from '../../assets/topdestination/t2.jpg';
import t3 from '../../assets/topdestination/t3.jpg';
import t4 from '../../assets/topdestination/t4.jpg';
import t5 from '../../assets/topdestination/t5.jpg';
import t6 from '../../assets/topdestination/t6.jpg';
import t7 from '../../assets/topdestination/t7.jpg';
import t8 from '../../assets/topdestination/t8.jpg';
import t9 from '../../assets/topdestination/t9.jpg';
import t10 from '../../assets/topdestination/t10.jpg';
import t11 from '../../assets/topdestination/t11.jpg';
import t12 from '../../assets/topdestination/t12.jpg';
import { AiFillStar } from 'react-icons/ai';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa'
import PackageOuter from '../../components/PackageOuter';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

const Recommend = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction == "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 5)
        } else {
            setSlideIndex(slideIndex < 5 ? slideIndex + 1 : 0)
        }
    }

    console.log(slideIndex);
    return (
        <Section slideIndex={slideIndex}>
            {/* <div className="left" onClick={() => handleClick("left")}><FaAngleDoubleLeft className='clr' /></div>
            <div className="right" onClick={() => handleClick("right")}><FaAngleDoubleRight className='clr' /></div> */}
            <div className="container">
                <h1>Recommended for you</h1>
                <div className="wrapper">
                    <PackageOuter video={t7} />
                    <PackageOuter video={t1} />
                    <PackageOuter video={t11} />
                    <PackageOuter video={t12} />
                </div>
            </div>
        </Section>
    );
}

export default Recommend;

const Section = styled.section`
    box-sizing: border-box;
    width: 100vw;
    height: 85vh;
    background-color: whitesmoke;
    padding: 0rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    margin: 0;
    .right{
            height: 30px;
            width: 30px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            right: 30px;
            display: flex;
            background-color: lightgray;
            justify-content: center;
            align-items: center;
            cursor: pointer;
            .clr{
                color: black;
            }
        }
    .left{
            height: 30px;
            width: 30px;
            border-radius: 50%;
            position: absolute;
            top: 50%;
            left: 30px;
            display: flex;
            background-color: lightgray;
            justify-content: center;
            align-items: center;
            border: .5px solid black;
            cursor: pointer;
            .clr{
                color: black;
            }
        }
    .container{
        display: flex;
        height: 100%;
        width: 100%;
        flex-direction: column;
        margin: 0;
        justify-content: center;
        align-items: flex-start;
        overflow: hidden;
        h1{
            font-size: 36px;
            padding: 0rem 2rem;
            margin-top: 1rem;
            color: #1a2b48;
        }
        .wrapper{
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            border-radius: .7rem;
            height: 60vh;
            .packageItem{
                width: 320px;
                height: 50vh;
                height: 100%;
                position: relative;
                overflow: hidden;
                box-shadow: rgba(100,111,111,0.35) 5px 5px 5px;
                border-radius: .7rem;
                .like{
                    position: absolute;
                    top: 15px;
                    right: 15px;
                    font-size: 25px;
                    color: white;
                    cursor: pointer;
                }
                .imgParent{
                    overflow: hidden;
                    display: block;
                    height: 27vh;
                    width: 100%;
                    border-radius: .7rem .7rem 0 0;
                    img{
                        overflow: hidden;
                        display: block;
                        width: 100%;
                        height: 27vh;
                        object-fit: cover;
                        transition: transform .3s;
                        :hover{
                            transform: scale(1.3);
                            transform-origin: 50% 50%;
                            cursor: pointer;
                        }
                }
                }
                .textWrapper{
                    padding: 1.5rem;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    justify-content: space-between;
                    .stars{
                        color: #da6938;
                        display: flex;
                        gap: 3px;
                        font-size: 14px;
                        margin-bottom: 7px;
                    }
                    .title{
                        font-size: 18px;
                        font-weight: bold;
                        margin-bottom: 7px;
                        :hover{
                            text-decoration: underline;
                            cursor: pointer;
                        }
                    }
                    .city{
                        font-size: 14px;
                        color: #727272;;
                        margin-bottom: 20px;
                        font-weight: 400;
                    }
                    hr{
                        width: 100%;
                        margin: 0;
                        margin-bottom: 20px;
                        color: #727272;
                    }
                    .ratings{
                        display: flex;
                        align-items: center;
                        justify-content: flex-start;
                        gap: .7rem;
                        margin-bottom: 10px;
                        .numbers{
                            border: 1px solid #3B71FE;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            font-size: 14px;
                            padding: 0.1rem 0.4rem;
                            color: #3B71FE;
                            font-weight: bold;
                            border-radius: 7px;
                        }
                        .type{
                            font-size: 14px;
                            color: #232323;
                            line-height: 26px;
                            font-weight: 600;
                        }
                        .review{
                            font-size: 13px;
                            font-weight: 400;
                            color: #212529;
                        }
                    }
                    .priceDetails{
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 1rem;
                        .from{
                            color: #212529;
                            font-size: 13px;
                            font-weight: 400;
                        }
                        .price{
                            font-weight: 600;
                            font-size: 16px;
                            display: flex;
                            align-items: center;
                        }

                    }
                }
            }
            
        }
    }
`


