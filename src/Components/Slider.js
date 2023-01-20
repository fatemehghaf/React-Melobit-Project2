import './Slider.css'
import React,{useState} from 'react';
import {Container, Row, Col,Carousel} from 'react-bootstrap';
import bgslider1 from '../bgslider1.svg'
import bgslider2 from '../bgslider2.svg'
import {Link} from 'react-router-dom';
import {FaPlay} from 'react-icons/fa'

function ImageSlider() {
    const [sliders, setSliders] = useState([])
    const showSlider = async () => {
        var resultSlider = await fetch('https://api-beta.melobit.com/v1/song/slider/latest')
            .then(Response =>
                Response.json())
            .then(data => {
                setSliders(data.results)
            })
    }
    showSlider()

    return (
        <Container>
            <Row className="justify-content-lg-center flex">
                <Col className='col-2 p-0 '>
                    <img src={bgslider2} className='mr-0 sliderbg' aria-hidden="true" alt='Background'/>
                </Col>
                <Carousel className='col-md-8 p-0' indicators={false} controls={false}>
                    {
                        sliders.map((slide, i) => (
                            <Carousel.Item interval={5000}>
                                <img
                                    key={i}
                                    className="d-block w-100 carousel-img"
                                    src={slide.image.slider.url}
                                    alt="slide"
                                />
                                <Carousel.Caption className=''>
                                    <Link to={`SongDetails/${slide.id}`}>
                                        <button className='listen-now'>
                                            <div className='fa-play'>
                                                <FaPlay className='icon-size' />
                                            </div>
                                        </button>
                                    </Link>
                                </Carousel.Caption>
                            </Carousel.Item>
                        ))
                    }
                </Carousel>
                <Col className='col-2 p-0'>
                    <img src={bgslider1} className='sliderbg' aria-hidden="true" alt='Background'></img>
                </Col>
            </Row>
        </Container>
    );
}

export default ImageSlider;
