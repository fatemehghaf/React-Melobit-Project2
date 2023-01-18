import logo from './mlogocolor.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {FaHome,FaSearch,FaTelegram,FaInstagram, FaFacebook} from 'react-icons/fa'
import { Container, Button, Card, InputGroup, Row, FormControl} from 'react-bootstrap'
import {FooterBox,FooterContainer,FooterRow,FooterColumn,FooterLink,Heading} from './FooterStyles.js';
import { useState, useEffect } from 'react'




function App() {
  const [searchInput, setSearchInput] = useState("")
  return (
    <div className="App pb-2 pt-1">
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
            console.log("pressed Enter")
           }
          }}
          onChange={event=> setSearchInput(event.target.value)}
          ></FormControl>
          <Button onClick={event=> {console.log("Clicled Butn")}}>
            <FaSearch/>
          </Button>
        </InputGroup>
      </Container>

      </header>
      
      
      
      <Container>
        <p>New Songs</p>
        <Row className='mx-2 row row-cols-4 mb-5 justify-content-around'>
	  <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

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

    <Card className='p-2'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-2'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

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

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

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

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

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

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

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

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='p-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>

      
    <hr></hr>    

    <footer class="page-footer">
          <FooterBox>
        <FooterContainer>
          <FooterRow>
            <FooterColumn>
              <Heading>About Us</Heading>
              <FooterLink href="#">Aim</FooterLink>
              <FooterLink href="#">Vision</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
            </FooterColumn>

            <FooterColumn>
              <Heading>Services</Heading>
                <FooterLink href="#">Writing</FooterLink>
                <FooterLink href="#">Internships</FooterLink>
                <FooterLink href="#">Coding</FooterLink>

            </FooterColumn>

            <FooterColumn>
              <Heading>Contact Us</Heading>
              <FooterLink href="#">Uttar Pradesh</FooterLink>
              <FooterLink href="#">Ahemdabad</FooterLink>
              <FooterLink href="#">Indore</FooterLink>
            </FooterColumn>
			
            
            <FooterColumn>
            <Heading>Social Media</Heading>
            <div className='social-icons'>   
			<FooterLink href="https://t.me/s/melodio">
              <h3 className='m-2'> <FaTelegram/></h3>
              </FooterLink>			
			  <FooterLink href="https://www.instagram.com/melobotmusic/?hl=en">
                <h3 className='m-2'> <FaInstagram/></h3>
              </FooterLink>
              <FooterLink href="https://www.facebook.com/melobot.melobit/">
                <h3 className='m-2'><FaFacebook/></h3>
              </FooterLink>   
        </div>
        </FooterColumn>
        
          </FooterRow>
      </FooterContainer>
    </FooterBox> 

        <div class="footer-copyright text-center py-2 text-white">© 2023 Developed By: Fatemeh Ghafouri , Mahdiye Shayan </div> 
    </footer>


    </div>
	
  );
}

export default App;