import { useParams } from 'react-router-dom';
import ProductList from '../../componets/product-list/ProductList';

const Home = () => {
  let { categoryID } = useParams();

  return (
    <>
      <ProductList category_id={categoryID} />
    </>
  );
};

export default Home;
