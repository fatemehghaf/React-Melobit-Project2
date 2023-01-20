import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react'
import { Route, Routes,BrowserRouter } from 'react-router-dom'
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Footer from './Components/Footer';
import Searchbar from "./Components/Searchbar";
import SongDetails from "./Components/SongDetails";




function App() {
  
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Searchbar />} />
        <Route path="/detailsong/:id" element={<SongDetails />} />
        <Route path="search/detailsong/:id" element={<SongDetails />} />
      </Routes>
      <Footer/>
    </div>
    
  );
}

export default App;