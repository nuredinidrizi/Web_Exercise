import React from "react";

import {NavLink} from "react-router-dom";

const AlbumItem = ({id, title}) => {
    return (
        <div className="AlbumItem">
            <NavLink to={`/albums/${id}`}> {title} </NavLink>
        </div>
    )
};

export default AlbumItem; 