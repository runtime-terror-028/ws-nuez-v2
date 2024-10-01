import React from "react";
import { motion } from "framer-motion";
import Footer from "../../componets/footer/Footer";
import ProductSection from "./single_page_product";
import { BMSData, SmartBenchData } from "./single_page_data";
import "./single_page.css";

const ProductPage = ({ data }) => (
  <>
    <div className="single_product_page">
      <div className="single_page_header_container">
        <div className="single_page_header">
          <h1>{data.header}</h1>
        </div>
        <div className="single_page_header_text">
          <p>{data.headerContent}</p>
        </div>
      </div>

      <div className="single_product_page_sections">
        {data.sections.map((section, index) => (
          <motion.div
            className="single_product_card"
            key={index}
            initial={{
              opacity: 0,
              x: index % 2 === 0 ? 50 : -50, // Slide from right if index is even, left if odd
            }}
            whileInView={{
              opacity: 1,
              x: 0, // Slide to original position
              transition: {
                duration: 1, // Animation duration
              },
            }}
          >
            <ProductSection
              heading={section.heading}
              image={data.images[index % data.images.length]}
              contents={section.contents}
            />
          </motion.div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);

export default ProductPage;

export const BMSPage = () => <ProductPage data={BMSData} />;
export const SmartBenchPage = () => <ProductPage data={SmartBenchData} />;
