import MapArticleCard from "./map-article-card";

import "./right-column.css";

/*right column of the map section*/
function TextDescription ({mapdescription}) {
    return (
        <div className="text-description-container">
            <p>{mapdescription}</p>
        </div>
    );
}


export default function RightColumn ({mapdescription, title, byline, url, image}) {
    return (
        <div className="right-column-container">
            <TextDescription
            mapdescription = {mapdescription}
            /> 
            <MapArticleCard
            title = {title}
            byline = {byline}
            url = {url}
            image = {image}
            />

            <MapArticleCard
            title = {title}
            byline = {byline}
            url = {url}
            image = {image}
            />

            <MapArticleCard
            title = {title}
            byline = {byline}
            url = {url}
            image = {image}
            />
        </div>
    );
}