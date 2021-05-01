import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router";
import PhotoItem from "../components/PhotoItem";
import "./styles/Photos.scss";

const Photos = () => {
    const {id: albumId} = useParams();
    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        getPhotos();
    }, [])

    const getPhotos = async () => {
        try{
            const {data} = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);

            setPhotos(data);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div className="Photos">
            <h2>Photos of album</h2>
            <div className="Photos__group">
                {photos.map(photo => <PhotoItem key={photo.id} id={photo.id} title={photo.title} thumbnailUrl={photo.thumbnailUrl} url={photo.url} /> )}
            </div>
        </div>
    )
};
export default Photos;