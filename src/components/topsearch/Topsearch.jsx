import React from 'react';
import styled from 'styled-components';
import city1 from '../../assets/topdestination/shimla.jpg'

const Topsearch = () => {
    return (
        <Section>
            <div className="container">
                <h1>Top Destinations</h1>
                <div className="wrapper">
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={city1} alt="" />
                        </div>
                        <div className="cityText">Manali</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={city1} alt="" />
                        </div>
                        <div className="cityText">Manali</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={city1} alt="" />
                        </div>
                        <div className="cityText">Manali</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={city1} alt="" />
                        </div>
                        <div className="cityText">Manali</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={city1} alt="" />
                        </div>
                        <div className="cityText">Manali</div>
                    </div>
                    <div className="packageItem">
                        <div className="imgWrapper">
                            <img src={city1} alt="" />
                        </div>
                        <div className="cityText">Manali</div>
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
                    img{
                        width: 100%;
                        height: 100%;
                        border-radius: 50%;
                        object-fit: cover;
                    }
                }
                .cityText {
                    font-size: 18px;
                    font-weight: 600;
                }
            }
        }
    }
`


