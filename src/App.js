import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import RightColumn from './components/right-column';

function App() {
  const [ data, setData ] = useState(null);
  
return (
  <div>
  <RightColumn
        mapdescription = {"The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career."}
        title = {"Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign"}
         byline = {"Connor Dullinger and Grant Walters"}
         url = {"https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign"}
         image = {"https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"}
  />

  <RightColumn
        mapdescription = {"The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career."}
        title = {"Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign"}
         byline = {"Connor Dullinger and Grant Walters"}
         url = {"https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign"}
         image = {"https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"}
  />
  </div>
)

  /*
  //test map article card component //
     return (
      <div>
         <TextDescription
         mapdescription = {"The highlight of my career is being able to bust their ass. December 2, 2006, best day of my college career."}
         />
         <MapArticleCard
         title = {"Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign"}
         byline = {"Connor Dullinger and Grant Walters"}
         url = {"https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign"}
         image = {"https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"}
         />
 
         <MapArticleCard
         title = {"Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign"}
         byline = {"Connor Dullinger and Grant Walters"}
         url = {"https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign"}
         image = {"https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"}
         />
 
         <MapArticleCard
         title = {"Looking ahead to UCLA football’s 2026 season following lackluster 2025 campaign"}
         byline = {"Connor Dullinger and Grant Walters"}
         url = {"https://dailybruin.com/2025/11/23/looking-ahead-to-ucla-footballs-2026-season-following-lackluster-2025-campaign"}
         image = {"https://assets3.dailybruin.com/images/rivalry-issue-25-26/A.sp_.football.DullysDrop.UCLAFuture.11.20.25.AGS_-2414ff54267f479b1d27c4ac52a51ec3.jpg"}
         />
      </div>
   )
   */

  useEffect(() => {
		fetch("<TODO: insert api url here>")
		.then(res => res.json())
		.then(res => setData(res.data['article.aml']))
  }, [])

  return data && (
    <div className="App">
      <Header/>
      Hello Daily Bruin!
      <Footer/>
    </div>
  );
}

export default App;
