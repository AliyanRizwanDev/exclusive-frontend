import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ExlusiveNav } from './components/ExlusiveNav';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Index } from './pages/signup/Index';

function App() {
  return (
    <div className="w-full h-auto border-2 border-black 2xl:container 2xl:mx-auto ">
      <ExlusiveNav />  
      <Index/> 
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/shopnow" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
