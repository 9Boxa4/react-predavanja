import React, {useState,useEffect} from 'react';
import API from '../config/api';
import axios from "axios"

const DeleteUsers = ({users,removeUser}) =>
{
    const[id,setId] = useState('');

    const handleChange = (e) =>
    {
        setId(e.target.value)
    }

    const handleSubmit = async(event) =>
    {
        event.preventDefault();

        const userID = id;
        const response = await API.delete(`users/${userID}`)
        if(response.status === 200) 
        {
            console.log(`response statis`, response.status);
            removeUser(id);
        }
    }

    return (
    <div>
        <h4>Delete Users</h4>

        <form onSubmit={handleSubmit}>

            <label>
                User id:<input type="text"
                onChange={handleChange}/>
            </label>
            <button type="submit">Delete</button>
        </form>
    </div>
    )
}

export default DeleteUsers;