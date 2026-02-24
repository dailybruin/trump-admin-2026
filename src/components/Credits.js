import styled, { createGlobalStyle } from "styled-components";

/* Global styles — loads Literata and Source Sans 3 from Google Fonts */
const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:ital,opsz,wght@0,7..72,200..900;1,7..72,200..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');
`;

/* Breakpoints for responsive design */
const breakpoints = {
    tablet: '1024px',
    mobile: '768px',
};

const CreditsContainer = styled.div`
    width: 100%;
    padding: 4em 2em;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3em;
    text-align: center;
    position: relative;
    justify-content: center;
    box-sizing: border-box;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2em;
    width: 100%;
    max-width: 75%;
    box-sizing: border-box;
`;

/* Section heading — H4 spec: 25px/500 desktop, 20px/400 mobile */
const SectionTitle = styled.h2`
    font-family: 'Literata', serif;
    font-size: 1.5625em;
    font-weight: 500;
    color: #165383;
    text-align: center;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 0;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.25em;
        font-weight: 400;
    }
`;

/* Responsive grid — 3 cols desktop, 2 cols tablet, 1 col mobile */
const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5em;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: ${breakpoints.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: ${breakpoints.mobile}) {
        grid-template-columns: 1fr;
        max-width: 31.25em;
        margin: 0 auto;
    }
`;

const CreditCard = styled.div`
    background-color: white;
    border: 2px solid #000000;
    border-radius: 0.75em;
    padding: 1.5em;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    box-sizing: border-box;
`;

const Name = styled.h3`
    font-family: 'Literata', serif;
    font-size: 1.5625em;
    font-weight: 500;
    color: #165383;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 0;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1.25em;
        font-weight: 400;
    }
`;

const Position = styled.p`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.25em;
    font-weight: 400;
    color: #165383;
    line-height: 100%;
    letter-spacing: 0%;
    margin: 0;

    @media (max-width: ${breakpoints.mobile}) {
        font-size: 1em;
    }
`;

const Credits = ({ developers = [], designers = [] }) => {
  const writers = [{ name: "Daily Bruin News team", position: "" }
  ];

  return (
    <>
      <GlobalStyle />
      <CreditsContainer>
        <Section>
          <SectionTitle>Reporting by</SectionTitle>
          <Grid style={{ gridTemplateColumns: '1fr', maxWidth: '500px' }}>
            {writers.map((writer, index) => (
              <CreditCard key={index}>
                <Name>{writer.name}</Name>
                {writer.position && <Position>{writer.position}</Position>}
              </CreditCard>
            ))}
          </Grid>
        </Section>

        <Section>
          <SectionTitle>Developers</SectionTitle>
          <Grid>
            {developers.map((dev, index) => (
              <CreditCard key={index}>
                <Name>{dev.last_name} {dev.first_name}</Name>
                <Position>{dev.position}</Position>
              </CreditCard>
            ))}
          </Grid>
        </Section>

                <Section>
                    <SectionTitle>Designers and Data Journalists</SectionTitle>
                    <Grid>
                        {designers.map((designer, index) => (
                            <CreditCard key={index}>
                                <Name>{designer.name}</Name>
                                <Position>{designer.position}</Position>
                            </CreditCard>
                        ))}
                    </Grid>
                </Section>
            </CreditsContainer>
        </>
    );
};

export default Credits;