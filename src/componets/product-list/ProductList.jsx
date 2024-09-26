import ProductCard from '../product-card/ProductCard';
import { useState, useEffect } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./ProductList.css";

// Dynamically import JSON files
const loadJsonData = async (category_id) => {
  switch (category_id) {
    case 'light':
      return {
        ProductData: await import('../../data/light/product.json'),
        CategoryData: await import('../../data/light/sub-category.json'),
      };
    case 'cctv':
      return {
        ProductData: await import('../../data/cctv/product.json'),
        CategoryData: await import('../../data/cctv/sub-category.json'),
      };
    case 'automation':
      return {
        ProductData: await import('../../data/automation/product.json'),
        CategoryData: await import('../../data/automation/sub-category.json'),
      };
    // case 'solar':
    //   return {
    //     ProductData: await import('../../data/solar/product.json'),
    //     CategoryData: await import('../../data/solar/sub-category.json'),
    //   };
    default:
      return {};
  }
};

function ProductList({ category_id }) {
  const [productData, setProductData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    // Load the appropriate JSON data based on the category_id
    const fetchData = async () => {
      const { ProductData, CategoryData } = await loadJsonData(category_id);
      setProductData(ProductData.default);
      setCategoryData(CategoryData.default);

      // Set first category key as the default active key
      if (CategoryData) {
        const firstCategoryKey = Object.keys(CategoryData.default)[0];
        setActiveKey(firstCategoryKey);
      }
    };

    fetchData();
  }, [category_id]);

  if (!productData || !categoryData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="product_list_heading text-center">
        Check out our wide variety of products
      </div>
      <Tabs
        activeKey={activeKey}
        onSelect={(k) => {
          if (k !== activeKey) {
            setActiveKey(k);
          }
        }}
        variant="underline"
        className="justify-content-center mt-2 mb-4"
      >
        {Object.keys(categoryData).map((categoryKey) => (
          <Tab
            key={categoryKey}
            eventKey={categoryKey}
            title={categoryData[categoryKey].title}
          >
            <div className={`tab-content ${activeKey === categoryKey ? '' : 'd-none'} d-flex flex-direction-row justify-content-evenly flex-wrap gap-4 product_card_container`}>
              {categoryData[categoryKey].product_list.map((productId) => {
                const product = productData[productId];
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
