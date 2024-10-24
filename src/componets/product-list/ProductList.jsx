import ProductCard from '../product-card/ProductCard';
import { useState, useEffect, useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import anime from 'animejs';
import './ProductList.css';

// Function to load JSON data based on category_id
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
    case 'solar':
      return {
        ProductData: await import('../../data/solar/product.json'),
        CategoryData: await import('../../data/solar/sub-category.json'),
      };
    default:
      return {};
  }
};

function ProductList({ category_id }) {
  const [productData, setProductData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);
  const [activeKey, setActiveKey] = useState(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const fetchData = async () => {
      const { ProductData, CategoryData } = await loadJsonData(category_id);
      setProductData(ProductData.default);
      setCategoryData(CategoryData.default);

      if (CategoryData) {
        const firstCategoryKey = Object.keys(CategoryData.default)[0];
        setActiveKey(firstCategoryKey);
      }
    };
    fetchData();
  }, [category_id]);

  useEffect(() => {
    if (activeKey && cardRefs.current.length > 0) {
      cardRefs.current = cardRefs.current.filter((ref) => ref != null);
      anime({
        targets: cardRefs.current,
        translateX: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 800,
        delay: anime.stagger(100),
      });
    }
  }, [activeKey]);

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
            cardRefs.current = [];
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
            <div
              className={`tab-content ${
                activeKey === categoryKey ? '' : 'd-none'
              } d-flex flex-direction-row justify-content-evenly flex-wrap gap-4 product_card_container`}
            >
              {categoryKey === 'spotlight' ? (
                categoryData[categoryKey].product_list.map((product, index) => (
                  <div
                    key={product.id}
                    className="fullwidth-image-container"
                    ref={(el) => {
                      if (activeKey === categoryKey) {
                        cardRefs.current[index] = el;
                      }
                    }}
                  >
                    <img
                      src={product.image}
                      alt={`PDF 1 Image ${index + 1}`} // Updated alt text
                      className="fullwidth-image"
                    />
                  </div>
                ))
              ) : categoryKey === 'catalogue' ? (
                categoryData[categoryKey].product_list.map((product, index) => (
                  <div
                    key={product.id}
                    className="fullwidth-image-container"
                    ref={(el) => {
                      if (activeKey === categoryKey) {
                        cardRefs.current[index] = el;
                      }
                    }}
                  >
                    <img
                      src={product.image}
                      alt={`PDF 2 Image ${index + 1}`} // Updated alt text
                      className="fullwidth-image"
                    />
                  </div>
                ))
              ) : (
                categoryData[categoryKey].product_list.map((productId, index) => {
                  const product = productData[productId];
                  return product ? (
                    <div
                      ref={(el) => {
                        if (activeKey === categoryKey) {
                          cardRefs.current[index] = el;
                        }
                      }}
                      key={productId}
                    >
                      <ProductCard
                        image={product.image}
                        title={product.short_title}
                        short_description={product.short_description}
                        long_description={product.long_description}
                        product_spec={product.specification}
                        product_var={product.variation}
                      />
                    </div>
                  ) : (
                    <div key={productId}>Product not available</div> // Fallback message
                  );
                })
              )}
            </div>
          </Tab>
        ))}
      </Tabs>
    </>
  );
}

export default ProductList;
