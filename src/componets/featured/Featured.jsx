import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from '../product-card/ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';
import './Featured.css';
import Product_light_data from '../../data/light/product.json';
import Product_cctv_data from '../../data/cctv/product.json';
import Product_automation_data from '../../data/automation/product.json';
import Product_solar_data from '../../data/solar/product.json';
import Category_data from '../../data/category.json';
import Button from 'react-bootstrap/Button';
import anime from 'animejs';
import { useEffect, useRef } from 'react';

const CARD_ANIMATION_DURATION = 1500;
const FEATURED_HEADING = "Our most selling products";

function ProductCardList({ json_data }) {
  const cardRefs = useRef([]);
  const containerRef = useRef(null); // Reference for the Swiper container

  useEffect(() => {
    // Setup the Intersection Observer
    const options = {
      root: null, // use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the component is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the animation when the component is visible
          cardRefs.current.forEach((ref, index) => {
            anime({
              targets: ref,
              translateX: [-100, 0],
              opacity: [0, 1],
              duration: CARD_ANIMATION_DURATION,
              // delay: index * 300 // Stagger delay for each card
            });
          });
        }
      });
    }, options);

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current); // Cleanup the observer on unmount
      }
    };
  }, []); // No dependencies, runs once on mount

  return (
    <div ref={containerRef}> {/* Wrap Swiper in a div to observe */}
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={35}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper product_class_list"
      >
        {Object.keys(json_data).map((key, index) => {
          if (index < 10) {
            return (
              <SwiperSlide key={key}>
                <div ref={(el) => (cardRefs.current[index] = el)}>
                  <ProductCard
                    title={json_data[key].short_title}
                    image={json_data[key].image}
                    short_description={json_data[key].short_description}
                    long_description={json_data[key].long_description}
                    product_spec={json_data[key].specification}
                    classname={`${key}`}
                  />
                </div>
              </SwiperSlide>
            );
          }
          return null; // Return null if index is not less than 10
        })}
      </Swiper>
    </div>
  );
}

function Featured() {
  const navigate = useNavigate();

  const getProductData = (key) => {
    switch (key) {
      case 'light':
        return Product_light_data;
      case 'cctv':
        return Product_cctv_data;
      case 'automation':
        return Product_automation_data;
      case 'solar':
        return Product_solar_data;
      default:
        return {};
    }
  };

  return (
    <>
      <div className="featured_heading w-100 text-center">
        {FEATURED_HEADING}
      </div>

      {Object.keys(Category_data).map((key) => (
        <div className="featured_section" key={key}>
          <div className="featured_section_header">
            <h2>{Category_data[key].title}</h2>
            <hr />
          </div>
          <ProductCardList json_data={getProductData(key)} />
          <div className="featured_section_footer d-flex justify-content-center">
            <Button className='featured_view_more_button' variant="outline-primary" onClick={() => navigate(`/${key}`)}>
              View more Products
            </Button>
          </div>
        </div>
      ))}
    </>
  );
}

export default Featured;
