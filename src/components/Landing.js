import styled, { createGlobalStyle } from "styled-components";
import arrow from '../images/arrow.svg'

// Global styles — loads Literata from Google Fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap');
`;

// Breakpoints for responsive design
const breakpoints = {
    mobile: '768px',
};

const LandingContainer = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

// H1 typography — desktop: 60px, mobile: 36px (per design spec)
const Headline = styled.h1`
    font-family: 'Literata', serif;
    font-weight: 600;
    color: #165383;
    text-align: center;
    line-height: 100%;
    letter-spacing: 0%;
    max-width: 75%;
    font-size: 3.75em;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 2.25em;
    }
`;

const ScrollArrow = styled.img`
    position: absolute;
    bottom: 2.78vh;
    width: 3.75em;
    height: 3.75em;
    cursor: pointer;
    transition: transform 0.3s ease;

    // Subtle downward nudge on hover to reinforce scroll intent
    &:hover {
        transform: translateY(5px);
    }
`;

const Landing = ({ data }) => {
    // Smoothly scrolls the user past the landing section to the main content
    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };
  
    return (
        <>
            <GlobalStyle />
            <LandingContainer>
                <Headline>{data?.headline || 'Header'}</Headline>
                {/* Conditionally renders landing image if provided via CMS/data */}
                {data?.landing_image && (
                    <img src={data.landing_image} alt="Landing Illustration" />
                )}
                <ScrollArrow 
                    src={arrow}
                    alt="Scroll Down"
                    onClick={scrollToContent}
                />
            </LandingContainer>
        </>
    );
};

export default Landing;