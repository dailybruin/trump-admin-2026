import styled, { createGlobalStyle } from "styled-components";

/* Global styles — loads Source Sans 3 from Google Fonts */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');
`;

/* Breakpoints for responsive design */
const breakpoints = {
    mobile: '768px',
};

/* Centered full-height container — max-width constrains to readable line length */
const SubheaderContainer = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin: 0 auto;
    @media (max-width: 768px) {
      padding-bottom: 30%;

    @media (max-width: ${breakpoints.mobile}) {
        max-width: 90%;
        align-items: flex-start;
        padding-top: 10vh;
    }
`;

/* body md: 1.25em (20px) desktop, 1em (16px) mobile per design spec */
const SubheaderText = styled.h1`
    font-family: 'Source Sans 3', sans-serif;
    font-weight: 400;
    color: #000000;
    text-align: left;
    line-height: 160%;
    letter-spacing: 0%;
    width: 100%;
    padding: 0 1.25em;
    font-size: 1.25em;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1em; /* mobile body — 16px at base 16px */
    }

    p {
        margin: 0 0 1em 0; /* Spacing between paragraphs */
    }

    p:last-child {
        margin-bottom: 0; /* Removes excess space after final paragraph */
    }

    a {
        color: #000000; /* Keeps inline links consistent with surrounding text */
    }
`;

const Subheader = ({ data }) => {
    return (
        <>
            <GlobalStyle />
            {/* id="subheader" is the scroll target for the landing arrow */}
            <SubheaderContainer id="subheader">
                {/* Renders subheading from CMS data — renders nothing if subheading is absent */}
                <SubheaderText>{data?.subheading}</SubheaderText>
            </SubheaderContainer>
        </>
    );
};

export default Subheader;