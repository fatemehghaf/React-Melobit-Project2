import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Searchbar from "./Components/Searchbar";
import SongDetails from "./Components/SongDetails";




function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/songDetails/:id" element={<SongDetails />} />
        <Route path="search/songDetails/:id" element={<SongDetails />} />
      </Routes>
      
    </div>
    
  );
}

export default App;