import logo from './mlogo.gif';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Button, Card, InputGroup, Row, FormControl} from 'react-bootstrap'
import { useState, useEffect } from 'react'



function App() {
  const [searchInput, setSearchInput] = useState("")
  return (
  <div className="Main mb-2">
    <div className="App mt-2">
      <Container>
        <InputGroup className='mb-4'>
          <FormControl
          placeholder='Search For Artist'
          type='input'
          onKeyPress={event => {
           if(event.key == "Enter"){
            console.log("pressed Enter")
           }
          }}
          onChange={event=> setSearchInput(event.target.value)}
          ></FormControl>
          <Button onClick={event=> {console.log("Clicled Butn")}}>
            Search
          </Button>
        </InputGroup>
      </Container>

      <Container>
        <p>New Songs</p>
        <Row className='mx-2 row row-cols-5 mb-5'>
	  <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>
	  
	 <Container>
        <p>Recent Albums</p>
        <Row className='mx-2 row row-cols-5 mb-5'>
	  <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>
	  
	  <Container>
        <p>Week Trending Artists</p>
        <Row className='mx-2 row row-cols-5 mb-5'>
	  <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>
	  
	  <Container>
        <p>Today Trending</p>
        <Row className='mx-2 row row-cols-5 mb-5'>
	  <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>
	  
	  <Container>
        <p>What's Your Mood?</p>
        <Row className='mx-2 row row-cols-5 mb-5'>
	  <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>
	  
	  <Container>
        <p>Top Genres</p>
        <Row className='mx-2 row row-cols-5 mb-5'>
	  <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    <Card className='m-1'>
      <Card.Img src="#" />
			  <Card.Body>
			    <Card.Title>Song Name</Card.Title>
			  </Card.Body>
		</Card>

    </Row>
      </Container>
    </div>
	</div>
  );
}

export default App;