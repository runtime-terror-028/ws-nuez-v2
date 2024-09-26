import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./componets/nav/Nav";
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import ProductPage from './pages/ProductPage/ProductPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './/index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="/product/:categoryID" element={<ProductPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);