import { useEffect, useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../data2";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
    ${mobile({ display: "none" })}
`;

const StartImg = styled.img`
    height: 100%;
    margin: 0 auto;
    transition: all 0.3s ease;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    justify-content: center;
    background-color: #${(props) => props.bg};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
`;

const Image = styled.img`
    width: 80vw;
    margin-top: 50px;
    border: 1px solid ##;
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Desc = styled.p`
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    letter-spacing: -0.5px;
    text-align: center;
`;

// const InfoNav = styled.div`
//     width: 30px;
//     height: 30px;
//     padding: 5px;
//     border-radius: 9999px;
//     background: #ccc;
//     margin: 20px auto;
// `;

const IntroBtn = styled.button`
    width: 80%;
    padding: 10px 1px;
    border-radius: 9999px;
`;

const Slider = (props) => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [intro, setIntro] = useState(false);
    const handleClick = () => {
        setSlideIndex(slideIndex < 2 ? slideIndex + 1 : props.setAppIndex(1));
    };

    useEffect(() => {
        setTimeout(() => {
            setIntro(true);
        }, 2000);
    }, []);
    return (
        <Container>
            {intro === false ? (
                <StartImg src="./img/start.png" alt=""></StartImg>
            ) : (
                <Wrapper slideIndex={slideIndex}>
                    {sliderItems.map((item) => (
                        <Slide key={item.id}>
                            <ImgContainer>
                                <Image src={item.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Desc>{item.desc}</Desc>
                            </InfoContainer>
                            <IntroBtn onClick={() => handleClick()}>
                                {item.button}
                            </IntroBtn>
                        </Slide>
                    ))}
                </Wrapper>
            )}
        </Container>
    );
};

export default Slider;
