import React, {useState, useContext} from 'react';
import { BookContext } from '../context/BookContext';

const BookForm = () =>
{
    const {dispatch} = useContext(BookContext)
    const [title,setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit=(e) =>
    {
        e.preventDefault();

        dispatch({
            type: "ADD_BOOK",
            payload: {
                title,
                author,
            },
        });
        setTitle('')
        setAuthor('')
    };

   

    return (
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            placeholder="Book title"
            value={title}
            onChange={(e)=> setTitle(e.target.value)}/>

            <input 
            type="text"
            placeholder="Authors name"
            value={author}
            onChange={(e)=>setAuthor(e.target.value)}/>

            <input type="submit" value="add Book"/>
        </form>
    )
};

export default BookForm;