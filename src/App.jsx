import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { ExlusiveNav } from './components/ExlusiveNav';
import { Footer } from './components/Footer';
import { Login } from './pages/login';
import { SignUp } from './pages/signup';
import { Home } from './pages';
import { IoCartOutline } from 'react-icons/io5';
import { Products } from './pages/products';
import { ProductDetailPage } from './pages/productDetailPage';
import { ContactUs } from './pages/contact Us';
import { AddToCart } from './pages/addToCart';
import { About } from './pages/about/about';

function App() {
  const location = useLocation();

  const routesWithCart = ["/", "/shopnow"];

  const showCartIcon = routesWithCart.includes(location.pathname);

  return (
    <div className="w-full h-auto 2xl:container 2xl:mx-auto">
      {showCartIcon && <ExlusiveNav cartIcon={<IoCartOutline />} />}
      {!showCartIcon && <ExlusiveNav />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shopnow" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/products" element={<Products/>} /> 
        <Route path="/productDetailPage/:productID" element={<ProductDetailPage/>} /> 
        <Route path="/contact" element={<ContactUs/>} /> 
        <Route path="/cart" element={<AddToCart/>} /> 
        <Route path="/about" element={<About/>} /> 

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
  