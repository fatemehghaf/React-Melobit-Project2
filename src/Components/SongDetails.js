import { useParams } from 'react-router-dom';
import React, { useState, useEffect, useRef } from 'react';
import { Container, Row } from 'react-bootstrap';
import {FaPlay,FaDownload,FaHeart} from 'react-icons/fa';
import {FiDownload} from 'react-icons/fi';
import './SongDetails.css';

function SongDetails() {
    const parameters = useParams();
    const [songDetails, setSongDetails] = useState([])
    const audioref = useRef(null);

    useEffect(() => {
    }, [])
    const showSongDetails = async () => {
        var resultSongDetails = await fetch('https://api-beta.melobit.com/v1/song/' + parameters.id)
            .then(Response =>
                Response.json())
            .then(data => {
                setSongDetails(data)
            })
    }
    showSongDetails()


    return (
        <Container>
            <div className='mt-5'>
                <div className='music-player-card center mt-5 mb-5'>
                    {songDetails.image && <img className='sm rounded-circle player-card' src={songDetails.image.cover.url} alt="Artist" />}
                </div>
                <div>
                    <div className='song-name'>
                        {songDetails.album && <p>{songDetails.album.name}</p>}
                    </div>
                    <div className='artist-name'>
                        {songDetails.artists && <p>{songDetails.artists[0].fullName}</p>}
                    </div>
                    <div className='center'>
                        {songDetails.audio &&
                            <audio src={songDetails.audio.high.url} controls ref={audioref} ></audio>
                        }
                    </div>
                </div>
                
                    <div>
                        <div className='text-light'>
                            <FaPlay />{songDetails.artists && <span className='p-2'>{songDetails.artists[0].sumSongsDownloadsCount}</span>}
                        </div>
                        <div className='text-light'>
                            <FaDownload />{songDetails.downloadCount && <span className='p-2'>{songDetails.downloadCount}</span>}
                        </div>
                        <div className='text-light'>
                            <FaHeart/>{songDetails.artists && <span className='p-2'>{songDetails.artists[0].followersCount}</span>}
                        </div>
                    </div>

            </div>

            <div className='music-rank-row mt-3'>
                <div className='Card lyrics row-between text-center'>
                    {songDetails.lyrics && <p className='align-center'>{songDetails.lyrics}</p>}
                </div>
            </div>
        </Container>
    );
}
export default SongDetails;
