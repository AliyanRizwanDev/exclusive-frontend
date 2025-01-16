import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import { ExlusiveNav } from './components/ExlusiveNav';
import { Footer } from './components/Footer';
import { Login } from './pages/login';
import { SignUp } from './pages/signup';
import { Home } from './pages';
import { IoCartOutline } from 'react-icons/io5';
import { Products } from './pages/products';

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

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
  