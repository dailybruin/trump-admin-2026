import React from 'react';
import './map-article-card.css';

/*the article cards for the map section*/

export default function MapArticleCard({title, byline, url, image}){
    const truncatedTitle = title.length > 82 ? title.substring(0, 82) + "..." : title;

    if (!title) return null;

    const handleImageError = (e) => {
        e.target.onerror = null;
        e.target.src = "https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found&font=inter";
    };

    return (
        <div className="article-card-container">
            <div className="article-card-image-container">
                <img
                    className="article-card-image"
                    src={image}
                    alt={truncatedTitle}
                    onError={handleImageError}
                />
            </div>

            <div className="article-card-content">
                <a href={url}>
                    {truncatedTitle}
                </a>
                <p>{byline}</p>
            </div>
        </div>
    );
}