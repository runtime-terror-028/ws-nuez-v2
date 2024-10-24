import ProductCard from '../product-card/ProductCard';
import { useState, useEffect, useRef } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import anime from 'animejs';
import './ProductList.css';

// Json data path
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
  const cardRefs = useRef([]); // Ref for each tab's product cards

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

  useEffect(() => {
    // Only animate the current tab's product cards
    if (activeKey && cardRefs.current.length > 0) {
      // Filter out null values from the refs array before animating
      cardRefs.current = cardRefs.current.filter((ref) => ref != null);

      anime({
        targets: cardRefs.current,
        translateX: [50, 0],
        opacity: [0, 1],
        easing: 'easeOutQuad',
        duration: 800,
        delay: anime.stagger(100), // Stagger animation for each card
      });
    }
  }, [activeKey]); // Re-run animation whenever activeKey changes

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
            cardRefs.current = []; // Reset cardRefs when the tab changes
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
              {categoryData[categoryKey].product_list.map(
                (productId, index) => {
                  const product = productData[productId];
                  return product ? (
                    <div
                      ref={(el) => {
                        // Only assign refs for the currently active tab's products
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
                  ) : null;
                }
              )}
            </div>
          </Tab>
        ))}
      </Tabs>
    </>
  );
}

export default ProductList;
