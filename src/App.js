import logo from './mlogocolor.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaHome,FaSearch} from 'react-icons/fa'
import { Container, Button, Card, InputGroup, Row, FormControl} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import React from 'react';
import axios from 'axios'
import Footer from './Components/Footer';




function App() {
  const [searchInput, setSearchInput] = useState("")
  const [songs,setSongs]= useState([])
  useEffect(()=>{

  },)

  const searchBar=async ()=>{
    console.log("Search: " + searchInput)


    await axios.get(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/8`)
    .then (data=> 
      console.log(data))
  }
  return (
    <div className="App pb-2 pt-1">

      {/*Header */}
      <header className="App-header mb-5">      
        <Container>
        <h2>
        <a className="App-link" href="./index.html"
        >
          <img src={logo} className="App-logo m-2" alt="logo" />
          <p>Melobit</p>
        </a>
        </h2>


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
      </header>
      


      {/*Body */}
      
      <Container>
        <p>New Songs</p>
        <Row className='mx-2 row row-cols-4 mb-5'>
          {songs.map((song,s)=>{
            return(
              <Card className='p-1'>
              <Card.Img src={song.images[0].url} />
			        <Card.Body>
			        <Card.Title>{song.name}</Card.Title>
			        </Card.Body>
		          </Card>
            )})
          }


    </Row>
      </Container>
	  
	 <Container>
        <p>Recent Albums</p>
        <Row className='mx-2 row row-cols-4 mb-5'>
	  <Card className='p-2'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>


    </Row>
      </Container>
	  
	  <Container>
        <p>Week Trending Artists</p>
        <Row className='mx-2 row row-cols-4 mb-5'>
	  <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>


    </Row>
      </Container>
	  
	  <Container>
        <p>Today Trending</p>
        <Row className='mx-2 row row-cols-4 mb-5'>
	  <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>
	  
	  <Container>
        <p>What's Your Mood?</p>
        <Row className='mx-2 row row-cols-4 mb-5'>
	  <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>
	  
	  <Container>
        <p>Top Genres</p>
        <Row className='mx-2 row row-cols-4 mb-5'>
	  <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>
    </Row>
      </Container>
      <Footer/>
    </div>
    
	
  );
}

export default App;