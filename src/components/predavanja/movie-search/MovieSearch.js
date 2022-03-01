import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppNavbar from './components/App/AppNavbar';
import About from './pages/About';
import Home from './pages/Home';


const MovieSearch = () => {
  return (
    <div>
        <Router>
            <AppNavbar/>
            <Routes >
                <Route path ="/about" element={<About/>}/>
                <Route path ="/" element={<Home/>}/>
            </Routes>
        </Router>
    </div>
  )
}

export default MovieSearch;