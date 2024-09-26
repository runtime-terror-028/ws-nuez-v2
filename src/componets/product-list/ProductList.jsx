import ProductCard from '../product-card/ProductCard';
import Product_light_data from '../../data/light/product.json';
import Category_light_data from '../../data/light/sub-category.json';
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./ProductList.css";

function ProductList() {
  const [activeKey, setActiveKey] = useState('home');

  return (
    <>
      <Tabs
        activeKey={activeKey}
        onSelect={(k) => {
          if (k !== activeKey) {
            setActiveKey(k);
          }
        }}
        className="mb-3"
      >
        {Object.keys(Category_light_data).map((categoryKey) => (
          <Tab
            key={categoryKey}
            eventKey={categoryKey}
            title={Category_light_data[categoryKey].title}
          >
            <div className={`tab-content ${activeKey === categoryKey ? '' : 'd-none'} d-flex flex-direction-row justify-content-evenly flex-wrap custom-gap`}>
              {Category_light_data[categoryKey].product_list.map((productId) => {
                const product = Product_light_data[productId];
                return product ? (
                  <ProductCard
                    key={productId}
                    image={product.image}
                    title={product.short_title}
                    short_description={product.short_description}
                    long_description={product.long_description}
                    product_spec={product.specification}
                  />
                ) : null;
              })}
            </div>
          </Tab>
        ))}
      </Tabs>
    </>
  );
}

export default ProductList;
