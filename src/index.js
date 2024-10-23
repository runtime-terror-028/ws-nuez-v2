import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import Nav from "./componets/nav/Nav";  // Corrected 'components' spelling
import Home from "./pages/Home/Home";
import NoPage from "./pages/NoPage/NoPage";
import ProductPage from './pages/ProductPage/ProductPage';
import { BMSPage, SmartBenchPage } from './pages/single_page/single_page';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';  // Fixed extra slash

export default function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:categoryID" element={<ProductPage />} />  {/* Add a slash */}
        <Route path="/bms" element={<BMSPage />} />
        <Route path="/smart-bench" element={<SmartBenchPage />} />
        <Route path="*" element={<NoPage />} />  {/* Handle 404 */}
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
