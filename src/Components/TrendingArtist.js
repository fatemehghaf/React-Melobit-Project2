import './Cards.css';
import React, { useState,Fragment} from 'react'
import { Link } from 'react-router-dom';

function TrendingArtist() {
    const [trendingArtists,setTrendingArtists]=useState([])

    const showArtists = async () => {
        var resultNewestSongs = await fetch('https://api-beta.melobit.com/v1/artist/trending/0/4')
            .then(Response =>
                Response.json())
            .then(data => {
                setTrendingArtists(data.results)
            })
    }
    showArtists()

    return (
<div>
             <div  className='mt-5 py-3 trend-artist' >
             <div className="songs-heading">
                <h2>Trending Artists</h2>
            </div>
        <div className='container'>
        <div className='row'>
            {
                trendingArtists.map((a)=>(
                    <div className='col-md-3 col-sm-6 col-6' key={a.id}>
                    <img src={a.image.cover.url} alt={a.fullName} className='w-100'/>
                    <h6 className='text-white-50 px-3'>{a.fullName}</h6>
                    <h6 className='px-3 pt-2 text-white'>Downloaded Songs: {a.sumSongsDownloadsCount}</h6>
                     
                    </div>
                ))
            } 
            </div>
        </div>
    </div>
            
        </div>
    );
}

export default TrendingArtist;