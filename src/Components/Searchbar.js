import './Home.css';
import './Searchbar.css';
import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Searchbar.css';
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { Container, Button, Card, InputGroup, Row, FormControl } from 'react-bootstrap'



function Searchbar() {

    const [searchInput, setSearchInput] = useState("")
    const [resultsSearch, setResultsSearch] = useState([])
    console.log("Search: " + searchInput)

    const searchBar = async () => {
        var resultSearch = await fetch('https://api-beta.melobit.com/v1/search/query/' + searchInput + '/0/15')
            .then(Response =>
                Response.json())
            .then(data => {
                setResultsSearch(data.results)
            })
        console.log(resultsSearch)
    }
    return (
        <div className="App pb-2 pt-5 pb-5">
             <Container>
        <InputGroup className='mb-4 m-1 p-1'>
          <FormControl
          placeholder='Album/Artist/Song'
          type='input'
          onKeyPress={event => {
           if(event.key == "Enter"){
            searchBar()
           }
          }}
          onChange={event=> setSearchInput(event.target.value)}
          ></FormControl>
          <Button onClick={searchBar()}>
            <FaSearch/>
          </Button>
        </InputGroup>
      </Container>
            <Container>
                <Row className='mx-2 row row-cols-4 search-page'>
                    {resultsSearch.map((artist) => (
                        artist.type === "artist" &&
                        <Card className='w-100 m-1 bg-cards'>
                            <div class="d-flex justify-content-center">
                                <div className='col-10 d-block m-auto '>
                                    <span className='result-text'>Name: </span><div className='profile-item'>{artist.artist.fullName}</div>
                                    <span className='result-text'> Followers: </span><div className='profile-item'>{artist.artist.followersCount}</div>
                                    <span className='result-text'> Downloaded: </span><div className='profile-item'>{artist.artist.sumSongsDownloadsCount}</div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </Card>
                    ))
                    }
                </Row>
                <Row className='mx-2 row row-cols-4'>
                    {resultsSearch.map((songs) => (
                        songs.type === "song" &&
                        <Link to={`SongDetails/${songs.song.id}`} className='text-decoration-none'>
                            <Card className='transparent-card'>
                                <Card.Img src={songs.song.album.image.cover.url} />
                                <Card.Body>
                                    <Card.Title className='result-text-heading' >{songs.song.album.name}</Card.Title>
                                    <Card.Title className='result-text'>{songs.song.album.artists[0].fullName}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Link>
                    ))
                    }
                </Row>
            </Container>
        </div >
    );
}
export default Searchbar;
