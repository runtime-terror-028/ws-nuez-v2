import Carousel from 'react-bootstrap/Carousel';
import "./Hero.css";


const HERO_IMAGE_CHANGE_TIME = 2000

function Hero() {
  return (
    <Carousel fade controls={false} interval={HERO_IMAGE_CHANGE_TIME}>
      <Carousel.Item>
        <img src='./demo.jpg'  className='hero_img'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src='./demo2.jpg'  className='hero_img'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img src='./demo.jpg'  className='hero_img'/>
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>      

    </Carousel>
  );
}

export default Hero;