import { useParams } from 'react-router-dom';
import ProductList from '../../componets/product-list/ProductList';
import Footer from "../../componets/footer/Footer"

const Home = () => {
  let { categoryID } = useParams();

  return (
    <>
      <ProductList category_id={categoryID} />
      <Footer/>
    </>
  );
};

export default Home;
