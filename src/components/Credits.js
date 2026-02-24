import styled from "styled-components";

const CreditsContainer = styled.div`
    width: 100%;
    padding: 4rem 2rem;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
`;

const Section = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    max-width: 75%;
`;

const SectionTitle = styled.h2`
    font-family: 'Literata', serif;
    font-size: 1.5625rem; /* 25px */
    font-weight: 500;
    color: #165383;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.25rem; /* 20px */
        font-weight: 400;
    }
`;

const Grid = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 1200px;
`;

const CreditCard = styled.div`
    background-color: white;
    border: 2px solid #000;
    border-radius: 0.75rem;
    padding: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 280px; /* Fixed width for card consistency in flex */
    box-sizing: border-box;

    @media (max-width: 768px) {
        width: 100%;
        max-width: 31.25rem;
    }
`;

const Name = styled.h3`
    font-family: 'Literata', serif;
    font-size: 1.5625rem;
    font-weight: 500;
    color: #165383;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

const Position = styled.p`
    font-family: 'Source Sans 3', sans-serif;
    font-size: 1.25rem; 
    font-weight: 600; /* SemiBold per spec */
    line-height: 110%;
    color: #165383;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`;

const Credits = ({ developers, designers }) => {
    const sections = [
        { title: "Written by", list: [{ name: "Daily Bruin News team", position: "" }] },
        { title: "Developers", list: developers || [] },
        { title: "Designers and Data Journalists", list: designers || [] }
    ];

    return (
        <CreditsContainer>
            {sections.map((sec, i) => (
                <Section key={i}>
                    <SectionTitle>{sec.title}</SectionTitle>
                    <Grid>
                        {sec.list.map((person, j) => (
                            <CreditCard key={j}>
                                <Name>{person.name}</Name>
                                {person.position && <Position>{person.position}</Position>}
                            </CreditCard>
                        ))}
                    </Grid>
                </Section>
            ))}
        </CreditsContainer>
    );
};

export default Credits;