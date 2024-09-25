import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProductCard from '../product-card/Product-card';
import 'swiper/css';
import 'swiper/css/navigation';
import './Featured.css';
import Product_light_data from '../../data/light/product.json';
import Product_cctv_data from '../../data/cctv/product.json';
import Product_solar_data from '../../data/solar/product.json';
import Category_data from '../../data/category.json'
import Button from 'react-bootstrap/Button';

const FEATURED_HEADING = "Our most selling products";


function ProductCardList({ json_data }) {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={35}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper product_class_list"
      // breakpoints={{
      //   640: {
      //     slidesPerView: 2,
      //     spaceBetween: 0,
      //   },
      //   768: {
      //     slidesPerView: 4,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 5,
      //     spaceBetween: 50,
      //   },
      // }}
      >
        {Object.keys(json_data).map((key) => (
          <SwiperSlide key={key}>
            <ProductCard
              title={json_data[key].short_title}
              image={json_data[key].image}
              short_description={json_data[key].short_description}
              long_description={json_data[key].long_description}
              product_spec={json_data[key].specification}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}



function Featured() {

  const getProductData = (key) => {
    switch (key) {
      case 'light':
        return Product_light_data;
      case 'cctv':
        return Product_cctv_data;
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
        <div className="featured_section">
          <div className="featured_section_header">
            <h2>{Category_data[key].title}</h2>
            <hr />
          </div>
          <ProductCardList key={key}
            json_data={getProductData(key)}
          />
          <div className="featured_section_footer d-flex justify-content-center">
            <Button variant="outline-secondary">View more Products</Button>{''}
          </div>
        </div>
      ))}
    </>
  )
}





export default Featured;
