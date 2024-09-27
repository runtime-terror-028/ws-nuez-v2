import React from "react";
import ProductSection from "./SinglePage_Product";
import { BMSData, SmartBenchData } from "./SinglePage_Data";

import "./SinglePage.css";

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
