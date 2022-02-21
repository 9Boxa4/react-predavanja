import React, {useState} from 'react'

const NewSongForms = ({addSong}) =>
{
    const [title,setTitle]=useState('');

    // const addSong = () =>
    // {
    // //    props.setSong([...props.songs,{title: title}, {id: proprs.lenght+1}])
    //    props.setSong([...props.songs,{title, id: proprs.lenght+1}])
    // }

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        addSong(title);
    }

    return <form style={{marginTop: 15}} onSubmit={handleSubmit}>
        <label >Song name:</label>
        <input type="text" onChange={(e)=> setTitle(e.target.value)}/>
        <input type="submit" value="Add" />
    </form>
}

export default NewSongForms; 