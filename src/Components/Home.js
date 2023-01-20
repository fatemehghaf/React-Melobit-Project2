import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaSearch} from 'react-icons/fa'
import { Container, Button, Card, InputGroup, Row, FormControl} from 'react-bootstrap'
import { useState, useEffect} from 'react'
import React from 'react';
import {Link} from 'react-router-dom';
import ImageSlider from './Slider'
import NewestSongs from './NewestSongs';
import TodayTrending from './TodayTrending';
import TrendingArtist from './TrendingArtist'
import Footer from './Footer';


export default function Home() {
const [searchInput, setSearchInput] = useState("")

const searchBar=async ()=>{
  console.log("Search: " + searchInput)


  /*await axios.get(`https://api-beta.melobit.com/v1/search/query/${searchInput}/0/8`)
  .then (data=> 
    console.log(data))*/
}
return(
<div className="App pb-2 pt-1">
      <header className="App-header mb-5">      
       
      </header>
      
     
      <ImageSlider/>
      <br></br>
      <Container>
      <NewestSongs/>
      <TodayTrending/>
      <TrendingArtist/>
      </Container>
      <Footer/>
	  
	  {/*<Container>
        <p>Top Genres</p>
        <Row className='mx-2 row row-cols-4 mb-5'>
	  <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>
    </Row>
        </Container>*/}

    </div>
    )
}