import styled, { createGlobalStyle } from "styled-components";

// Global styles — loads Source Sans 3 from Google Fonts
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');
`;

// Centered full-height container — max-width constrains to readable line length
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
        max-width: 90%;
        align-items: flex-start;
        padding-top: 10vh;
    }
`;

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

    @media (max-width: 768px) {
        font-size: 1em;
    }

    a{
      color: #000000;}  /* Keeps inline links consistent with surrounding text */
`;

const Subheader = ({ data }) => {
  return (
    <>
      <GlobalStyle />
      <SubheaderContainer id="subheader">
        <SubheaderText>{data?.subheading}</SubheaderText>
      </SubheaderContainer>
    </>
  );
};

export default Subheader;