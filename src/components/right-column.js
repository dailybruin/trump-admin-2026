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


/*need to integrate article.aml*/
export default function RightColumn ({defaultProps}) {
    return (
        <div className="right-column-container">
            <TextDescription
            mapdescription = {defaultProps.map_description}
            /> 
            <MapArticleCard
            title = {defaultProps.article_title_1}
            byline = {defaultProps.article_byline_1}
            url = {defaultProps.article_url_1}
            image = {defaultProps.article_image_1}
            />

            <MapArticleCard
            title = {defaultProps.article_title_2}
            byline = {defaultProps.article_byline_2}
            url = {defaultProps.article_url_2}
            image = {defaultProps.article_image_2}
            />

            <MapArticleCard
            title = {defaultProps.article_title_3}
            byline = {defaultProps.article_byline_3}
            url = {defaultProps.article_url_3}
            image = {defaultProps.article_image_3}
            />
        </div>
    );
}