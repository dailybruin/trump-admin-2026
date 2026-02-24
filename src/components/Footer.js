import fb from '../images/socials/fb.svg'
import insta from '../images/socials/insta.svg'
import twitter from '../images/socials/twitter.svg'
import tiktok from '../images/socials/tiktok.svg'
import email from '../images/socials/email.svg'

import styled from 'styled-components'
import { mediaQueries } from '../shared/config';


const Container = styled.div`
    background-color: #fff;
    height: auto;
    color: #165383;
    padding: 3.75em 0 0.625em 0;
    text-align: center;

    h1 {
        margin: 0;
        font-family: 'Times New Roman', Times, serif;
        font-size: 1.875em;
    }
    /* margin-bottom: 20px; */
`

const Socials = styled.div`
    position: relative;
    margin-top: 1.25em;

    img {
        position: relative;
        margin: 0 1.25em;
    }

    p {
        position: relative;
        margin: 5em 1.25em;
        ${mediaQueries.mobile} {
            margin: 3.125em 1.25em;
        }
    }
`

const Footer = () => {
    return (
        <Container>
            <h1>DAILY BRUIN</h1>
            <Socials>
                {/* Social icon links — open in new tab to keep user on page */}
                <a href="https://www.instagram.com/dailybruin" target="_blank" rel="noreferrer"><img src={insta} alt="Daily Bruin Instagram"/></a>
                <a href="https://www.facebook.com/dailybruin" target="_blank" rel="noreferrer"><img src={fb} alt="Daily Bruin Facebook"/></a>
                <a href="https://www.twitter.com/dailybruin" target="_blank" rel="noreferrer"><img src={twitter} alt="Daily Bruin Twitter"/></a>
                <a href="https://www.tiktok.com/@dailybruin" target="_blank" rel="noreferrer"><img src={tiktok} alt="Daily Bruin TikTok"/></a>
                <a href="http://eepurl.com/cFEiZX" target="_blank" rel="noreferrer"><img src={email} alt="Daily Bruin Newsletter"/></a>
                <p>Built with Suzy's ♥ in Kerckhoff 118.</p>
            </Socials>
        </Container>
    )
}

export default Footer;