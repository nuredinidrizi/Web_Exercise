import React, {useEffect, useState} from "react";
import axios from "axios";
import AlbumItem from "../components/AlbumItem";
import "./styles/Album.scss";

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        getAlbums();
    }, [])
    const getAlbums = async () => {
        try{
            const {data} = await axios.get("https://jsonplaceholder.typicode.com/albums");

            setAlbums(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="Albums">
            <h2>Albums</h2>
            <div className="Albums__group">
                {albums.map(album => <AlbumItem key={album.id} id={album.id} title={album.title} /> )}
            </div>
        </div>
    )
};
export default Albums; 