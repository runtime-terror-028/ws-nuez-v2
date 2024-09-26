import Carousel from 'react-bootstrap/Carousel';
import "./Hero.css";

// Image list array
const hero_image_list = [
  "./img/hero/1.jpeg",
  "./img/hero/2.jpeg",
  "./img/hero/3.jpeg",
  "./img/hero/4.jpeg",
  "./img/hero/5.jpeg",
  "./img/hero/6.jpeg",
  "./img/hero/7.jpeg",
  "./img/hero/8.jpeg",
  "./img/hero/9.jpeg",
  "./img/hero/10.jpeg",
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
