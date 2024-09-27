import React from "react";
// Indivisual single product section
const ProductSection = ({ heading, image, contents }) => (
  <div className=" single_product_section ">
 <div className="single_product_heading"><h2>{heading}</h2></div>
<div className="single_product_container">
    <div className="single_product_section_image">
      <img src={image} alt={heading} className="image" />
    </div>
    <div className="single_product_section_text">
      <ul>
        {contents.map((content, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: content }} />
        ))}
      </ul>
    </div>
    
    </div>
  </div>
);
export default ProductSection;


