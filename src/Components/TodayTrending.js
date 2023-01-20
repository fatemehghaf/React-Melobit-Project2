import './Cards.css';
import React, { useState,Fragment} from 'react'
import { Link } from 'react-router-dom';
import {FaPlayCircle} from 'react-icons/fa'


function TodayTrending() {
    const [songs, setSongs] = useState([])
    const showSongs = async () => {
        var resultNewestSongs = await fetch('https://api-beta.melobit.com/v1/song/top/day/0/4')
            .then(Response =>
                Response.json())
            .then(data => {
                setSongs(data.results)
            })
    }
    showSongs()

    return (
        <div>
            <Fragment>
            <section className="songs">
            <div className="songs-heading">
                <h2>Today's Trending</h2>
            </div>
            <div className="songs-row mt-0">
            {
                    songs.map((song,s)=>{
                        return(
                            <div className="songs-column">
                                <div className="songs-carde">
                                <Link to={`detailsong/${song.id}`} className='text-decoration-none'>
                                <div className="songs-thumb">
                                <img
                                        className=" mt-5  figure-img img-fluid rounded-img"
                                        key={s}
                                        src={song.album.image.cover.url}
                                        alt={song.album.name} />
                                    <div className="social-links">
                                        <ul>
                                            <li><a href="#"><i><FaPlayCircle/></i></a></li>
                                        </ul>
                                    </div>
                                    
                                </div>
                                <div className='songs-info'>
                                    <h3 >{song.album.name}</h3>
                                    <p className='card-text'>{song.album.artists[0].fullName}</p>

                                </div>
                                </Link>
                            </div>
                            </div>
                        )
                    })
                    
                }
            </div>

            </section>
        </Fragment>
        </div>
    );
}

export default TodayTrending;
