import Carousel from 'react-bootstrap/Carousel';
import "./Hero.css";

// Image list array
const hero_image_list = [
  "./image/hero/1.jpeg",
  "./image/hero/2.jpeg",
  "./image/hero/3.jpeg",
  "./image/hero/4.jpeg",
  "./image/hero/5.jpeg",
  "./image/hero/6.jpeg",
  "./image/hero/7.jpeg",
  "./image/hero/8.jpeg",
  "./image/hero/9.jpeg",
  "./image/hero/10.jpeg",
];

// Interval time for slide change
const HERO_IMAGE_CHANGE_TIME = 3000;

function Hero() {
  return (
    <Carousel fade controls={false} interval={HERO_IMAGE_CHANGE_TIME}>
      {hero_image_list.map((imageSrc, index) => (
        <Carousel.Item key={index}>
          <img src={imageSrc} className='hero_img' alt={`Hero Slide ${index + 1}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Hero;
