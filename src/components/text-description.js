import "@fontsource/source-sans-3";
import "./text-description.css";

function TextDescription ({mapdescription}) {
    return (
        <div className="text-description-container">
            <p>{mapdescription}</p>
        </div>
    );
}

export default TextDescription