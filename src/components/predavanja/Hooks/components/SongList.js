import React, {useState} from 'react';
import NewSongForms from './NewSongForms';

const SongList = () =>
{
const [songs,setSongs]= useState([
    {title: 'Shook ones', id:0},
    {title: 'Juicy', id:1},
    {title: 'Hypnotize', id:2},
])

const addSong = (title) =>
{
    setSongs([...songs, {title,id:songs.length+1}])
}

    return <>
        <h2>My song list</h2>
        {songs.map((song,index)=>
        {
         return   <li key={song.id}>{song.title}</li>
        })}

        {/* <NewSongForms songs={songs} setSongs={setSongs}/> */}
        <NewSongForms addSong={addSong}/>
    </>
}

export default SongList;