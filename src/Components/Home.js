import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaSearch} from 'react-icons/fa'
import { Container, Button, Card, InputGroup, Row, FormControl} from 'react-bootstrap'
import { useState, useEffect} from 'react'
import React from 'react';
import {Link} from 'react-router-dom';
import ImageSlider from './Slider'

export default function Home() {
const [searchInput, setSearchInput] = useState("")
const [songs]= useState([])
useEffect(()=>{

},)

const searchBar=async ()=>{
  console.log("Search: " + searchInput)


  /*await axios.get(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/8`)
  .then (data=> 
    console.log(data))*/
}
return(
<div className="App pb-2 pt-1">
      {/*Header */}
      <header className="App-header mb-5">      
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
      </header>
      


      {/*Body */}
      <ImageSlider/>
      <br></br>
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

    </div>
    )
}