import React, { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import Subheader from "./components/Subheader";
import Credits from "./components/Credits";
import ArticleCardsSection from "./components/ArticleCardsSection";
import MapDesktopPage from "./map-desktop.js";
import MapMobilePage from "./map-mobile.js";
import TimelineContainer from './components/TimelineContainer';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Literata:ital,wght@0,200..900;1,200..900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:wght@200..900&display=swap');

  body {
    margin: 0;
    padding: 0;
    background-color: #fff;
  }
`;

function App() {

    const [data, setData] = useState({});
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 48 * 16);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 48 * 16);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        fetch("https://oink.dailybruin.com/api/packages/flatpages/test-package")
            .then(res => res.json())
            .then(res => {
                if (res.data && res.data['article.aml']) {
                    setData(res.data['article.aml']);
                }
            })
            .catch(err => console.error("CMS Load Error:", err));
    }, []);

    return (
        <div className="App">
            <GlobalStyle />
            <Header />

            <Landing />
            <Subheader />

            <section id="timeline">
                <TimelineContainer data={data.timeline} />
            </section>

            <section id="map">
                {isMobile
                    ? <MapMobilePage data={data.maps} />
                    : <MapDesktopPage data={data.maps} />
                }
            </section>

            <section id="read-more">
                <ArticleCardsSection
                    title="Read more of The Bruin's budget cut coverage:"
                    articles={data.articles}
                />
            </section>

            <section id="about">
                <Credits
                    developers={data.developer_credits}
                    designers={data.designers_journalist_credit}
                />
            </section>

            <Footer />
        </div>
    );
}

export default App;