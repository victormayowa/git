import React, {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
import NewSongForm from "./NewSongForm";


const SongList = () => {
    const [songs, setSongs] = useState([
        {title: 'almost home', id: 1},
        {title: 'memory godpel', id: 2},
        {title: 'the wild', id: 3},
    ]);
    const addSong = (title) => {
        setSongs([...songs, {title, id: uuidv4()}]);
    }
    return (
        <div className="song-list">
            <h1> Song List </h1>
            <ul>
                {songs.map(song => {
                    return ( <li key={song.id}>{song.title}</li>);
                })}
            </ul>
            <NewSongForm addSong={addSong}/>

        </div>
    )
}

export default SongList;