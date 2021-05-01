import React from "react";

const PhotoItem = ({title, thumbnailUrl, url}) => {
    return (
        <a rel="noreferrer" href={url} target="_blank" className="PhotoItem" title={title}>
            <img alt={title} src={thumbnailUrl} />
        </a>
    )
};

export default PhotoItem; 