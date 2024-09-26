import { useParams } from 'react-router-dom';
import Hero from '../../componets/hero/Hero';
import Featured from '../../componets/featured/Featured';
import ProductList from '../../componets/product-list/ProductList';
const Home = () => {
  let categoryID = useParams();
  
  return (
      <>
      <ProductList
      category_id = {categoryID.categoryID}
      />
      </>
    )
  };
  
  export default Home;