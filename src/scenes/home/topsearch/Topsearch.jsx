import React from 'react';
import styled from 'styled-components';
import t2 from '../../../assets/topdestination/t2.jpg';
import t3 from '../../../assets/topdestination/t3.jpg';
import t4 from '../../../assets/topdestination/t4.jpg';
import t5 from '../../../assets/topdestination/t5.jpg';
import t6 from '../../../assets/topdestination/t6.jpg';
import t11 from '../../../assets/topdestination/t11.jpg';

const Topsearch = () => {
    return (
        <Section>
            <div className="container">
                <h1>Top Destinations</h1>
                <div className="wrapper">
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={t11} alt="" />
                        </div>
                        <div className="cityText">Goa</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={t2} alt="" />
                        </div>
                        <div className="cityText">Shimla</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={t3} alt="" />
                        </div>
                        <div className="cityText">Ahmedabad</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={t4} alt="" />
                        </div>
                        <div className="cityText">Mumbai</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={t5} alt="" />
                        </div>
                        <div className="cityText">Kolkata</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={t6} alt="" />
                        </div>
                        <div className="cityText">Bangalore</div>
                    </div>
                </div>
            </div>
        </Section>
    );
}

export default Topsearch;

const Section = styled.section`
    margin-top: 5rem;
    box-sizing: border-box;
    width: 100vw;
    height: 65vh;
    background-color: whitesmoke;
    padding: 2rem 3rem;
    .container{
        display: flex;
        flex-direction: column;
        padding: 0;
        margin: 0;
        justify-content: space-between;
        align-items: center;
        h1{
            font-size: 40px;
            margin-top: 1rem;
            color: #1a2b48;
        }
        .wrapper{
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 30px;
            .packageItem{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
                gap: 20px;
                .imgWrapper{
                    width: 200px;
                    height: 200px;
                    border-radius: 50%;
                    overflow: hidden;
                    img{
                        display: block;
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                        transition: transform .5s;
                        :hover{
                            transform: scale(1.3);
                            transform-origin: 50% 50%;
                            cursor: pointer;
                        }
                    }
                }
                .cityText {
                    font-size: 18px;
                    font-weight: 600;
                    color: #232323;
                    :hover{
                        color: blue;
                        cursor: pointer;
                    }
                }
            }
        }
    }
`


