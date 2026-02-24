import styled from 'styled-components'

import DBLogo from '../images/DailyBruinLogo.svg'

// Sticky header bar - stays fixed at the top while user scrolls
const DBHeader = styled("div")`
  z-index: 2001;  /* Ensure header is above all other content */

  position: -webkit-sticky;
  position: sticky;
  top: 0;
  background: #165383;
  width: 100%;
  padding: 0.2em 0;
  color: white;
  font-family: 'ITC Century';
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  font-size: 1.125em;
  line-height: 1.2em;
  /* border-bottom: 2px solid black; */
`;

const Header = () => {
  return (
    <DBHeader>
      {/* Daily Bruin */}
      <a href="https://dailybruin.com">
        <img src={DBLogo} alt="Daily Bruin" />
      </a>
    </DBHeader>
  )
}

export default Header;