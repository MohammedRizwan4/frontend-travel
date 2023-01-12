import React from 'react';
import { AiFillStar, AiOutlineHeart } from 'react-icons/ai';
import styled from 'styled-components';

const PackageOuter = ({video}) => {
    return (
        <Wrapper>
            <div className="packageItem">
                <div className="like"><AiOutlineHeart /></div>
                <div className="imgParent">
                    <img src={video} alt="" />
                </div>
                <div className="textWrapper">
                    <div className="stars"><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /></div>
                    <div className="title">Luxurios Honeymoon in Goa</div>
                    <div className="city">Goa</div>
                    <hr />
                    <div className="ratings">
                        <div className="numbers"> 5 / 5</div>
                        <div className="type">Excellent</div>
                        <div className="review">(3 Reviews)</div>
                    </div>
                    <div className="priceDetails">
                        <div className="from">From : </div>
                        <div className="price">€180,00 <span className='from'>&nbsp;/ nights</span></div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

export default PackageOuter;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-around;
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
`