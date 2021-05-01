import React from "react";

const PhotoItem = ({title, thumbnailUrl, url}) => {
    return (
        <div className="PhotoItem">
            <img alt={title} src={thumbnailUrl} />
            <p>{title}</p>
        </div>
    )
};

export default PhotoItem; 