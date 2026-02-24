import styled from "styled-components";
import arrow from "../images/arrow.svg";

const HEADER_HEIGHT = 48;

const LandingContainer = styled.section`
    width: 100%;
    height: calc(100vh - ${HEADER_HEIGHT}px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: relative;
`;

const Headline = styled.h1`
    font-family: 'Literata', serif;
    font-weight: 600;
    color: #165383;
    text-align: center;
    line-height: 1.1;
    font-size: 3.75rem;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 2.25rem;
    }
`;

const ScrollArrow = styled.img`
    position: absolute;
    bottom: 5vh;
    width: 3rem;
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(6px);
    }
`;

export default function Landing() {

    const scrollToContent = () => {
        const next = document.getElementById("subheader");
        if (!next) return;

        const y =
            next.getBoundingClientRect().top +
            window.pageYOffset -
            HEADER_HEIGHT;

        window.scrollTo({ top: y, behavior: "smooth" });
    };

    return (
        <LandingContainer id="home">
            <Headline>
                <span>"A Perfect Storm":</span>
                <br />
                <span>How Budget Cuts Have Impacted UCLA</span>
            </Headline>

            <ScrollArrow
                src={arrow}
                alt="Scroll Down"
                onClick={scrollToContent}
            />
        </LandingContainer>
    );
}