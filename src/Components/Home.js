import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container} from 'react-bootstrap'
import React from 'react';
import ImageSlider from './Slider'
import NewestSongs from './NewestSongs';
import TodayTrending from './TodayTrending';
import TrendingArtist from './TrendingArtist'
import Footer from './Footer';


export default function Home() {

return(
<div className="App pb-2 pt-1">
  
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