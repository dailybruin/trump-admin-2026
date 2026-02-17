import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes, css } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 50px 0;
    font-family: 'IBM Plex Serif', serif; 
    position: relative;
`;

const TimelineItem = styled.div`
    display: flex;
    width: 80%;
    max-width: 1200px;
    padding-bottom: 50px; /* Use padding to maintain border continuity */
    opacity: 0; 
    
    ${props => props.isVisible && css`
        animation: ${fadeIn} 0.8s ease-out forwards;
    `}

    @media (max-width: 768px) {
        flex-direction: column;
        width: 90%;
        padding-bottom: 30px;
    }
`;

const DateColumn = styled.div`
    width: 25%;
    padding-left: 20px; /* Space between line and date */
    padding-right: 0;
    text-align: left; /* Shift text to left */
    border-left: 2px solid #000; /* Line on the left */
    border-right: none;
    position: relative;
    
    /* The Dot */
    &::after {
        content: '';
        position: absolute;
        top: 0; 
        left: -6px; /* Center dot on left border */
        width: 10px;
        height: 10px;
        background-color: #000;
        border-radius: 50%;
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: left;
        border-left: 2px solid #000;
        padding-left: 20px;
        margin-bottom: 15px;
        
        &::after {
            left: -6px; /* Keep consistent */
        }
    }
`;

const DateText = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: #2c3e50; 
    margin: 0;
    position: sticky;
    top: 100px; /* Offset for Header */
`;

const ContentColumn = styled.div`
    width: 75%;
    padding-left: 100px; /* Increased gap */
    display: flex;
    flex-direction: column;
    text-align: left; 

    @media (max-width: 768px) {
        width: 100%;
        padding-left: 20px; /* Normal gap on mobile */
        border-left: none;
        margin-left: 2px;
        padding-left: 18px;
    }
`;

const Description = styled.p`
    font-size: 1.1rem;
    line-height: 1.6;
    margin-top: 0; 
    margin-bottom: 20px;
    text-align: left; /* Explicitly ensure left alignment */
    max-width: 600px; /* Match image max-width */
`;

const Image = styled.img`
    width: 100%;
    max-width: 600px;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
`;


const TimelineContainer = () => {
    const tempTimeline = [
        {
            timeline_date: "December 2006",
            timeline_description: "The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career.",
            timeline_image: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg"
        },
        {
            timeline_date: "November 2008",
            timeline_description: "Another significant event in the timeline, showcasing the intense rivalry and the moments that defined the era.",
            timeline_image: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg"
        },
        {
            timeline_date: "October 2010",
            timeline_description: "Reflecting on the past victories and the challenges overcome during this period.",
            timeline_image: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg"
        },
        {
            timeline_date: "September 2012",
            timeline_description: "A memorable game that brought the community together and solidified the team's legacy.",
            timeline_image: "https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.feature.MJD_.11.23.25.file_-19a0de0cfc3c132740b6be3caa6980bb.jpg"
        }
    ];

    return (
        <Container>
            {tempTimeline.map((event, index) => (
                <FadeInItem key={index}>
                    <DateColumn>
                        <DateText>{event.timeline_date}</DateText>
                    </DateColumn>
                    <ContentColumn>
                        <Description>{event.timeline_description}</Description>
                        <Image src={event.timeline_image} alt={`Timeline event ${event.timeline_date}`} />
                    </ContentColumn>
                </FadeInItem>
            ))}
        </Container>
    );
};

// Helper component for intersection observer logic
const FadeInItem = ({ children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Standard intersection observer behavior: unobserve after visible if you want it correctly handled once
                    // observer.unobserve(entry.target); 
                }
            });
        });
        if (domRef.current) observer.observe(domRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <TimelineItem ref={domRef} isVisible={isVisible}>
            {children}
        </TimelineItem>
    );
};

export default TimelineContainer;