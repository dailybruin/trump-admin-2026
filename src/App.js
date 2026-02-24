import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Landing from "./components/Landing";
import Subheader from "./components/Subheader";
import Credits from "./components/Credits";
import Footer from './components/Footer';

function App() {
  const [ data, setData ] = useState({
  headline: <>"A Perfect Storm":<br/>How Budget Cuts Have Impacted UCLA</>,    
  subheading: 
    <>
      <p>
        UCLA is projected to run a $425 million deficit for the 2025-26 fiscal year, Stephen Agostini, 
        UCLA's former chief financial officer, told the Daily Bruin on Feb. 6. Chancellor Julio Frenk 
        announced that Agostini had been replaced as CFO four days after the Bruin published a Feb. 13 
        article in which Agostini alleged that UCLA administrators have mismanaged the university's 
        finances, contributing to the deficit. Mary Osako, vice chancellor for strategic communications, 
        called Agostini's deficit projection an overestimate in a Feb. 17 statement but did not provide 
        additional financial data.
      </p>
      <p>
        The university has not posted annual{" "}
        <a  
          href="https://www.finance.ucla.edu/corporate-accounting/ucla-annual-financial-reports"
          target="_blank"
          rel="noopener noreferrer"
        >
          <u>financial reports</u>
        </a>
        , which Agostini said contain erroneous numbers, for the last two fiscal years as of mid-February. 
        Frenk told the Daily Bruin Jan. 15 that several factors – some of which are laid out in the 
        timeline below – have combined to create "a perfect storm" culminating in UCLA's current budget 
        crisis. Programs across campus have had their funding slashed, from student-run retention projects 
        to tour guide organizations.
      </p>
      <p>
        The Daily Bruin News team's special project – "A Perfect Storm": How Budget Cuts Have Impacted 
        UCLA – outlines the history behind UCLA's budget shortfalls and tracks the parts of campus that 
        have faced cuts.
      </p>
    </>
  });
  
  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return (
    <div className="App">
      <Header/>
      <Landing data={data}/>
      <Subheader data={data}/>
      <Credits data={data}/>
      <Footer/>
    </div>
  );
}

export default App;
