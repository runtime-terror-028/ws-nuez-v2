import React from "react";

import ProductSection from "./single_page_product";
import { BMSData, SmartBenchData } from "./single_page_data";

import "./single_page.css";

const ProductPage = ({ data }) => (
  <>
    <div className="single_product_page">

        <div className="single_page_header_container">
          <div className="single_page_header"><h1>{data.header}</h1></div>
        <div className="single_page_header_text">  <p>{data.headerContent}</p></div>
        </div>
   
      <div className="single_product_page_sections">
        {data.sections.map((section, index) => (
          <ProductSection
            key={index}
            heading={section.heading}
            image={data.images[index % data.images.length]}
            contents={section.contents}
          />
        ))}
      </div>
    </div>
  </>
);

export default ProductPage;

export const BMSPage = () => <ProductPage data={BMSData} />;
export const SmartBenchPage = () => <ProductPage data={SmartBenchData} />;
