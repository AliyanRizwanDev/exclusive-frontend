import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ExlusiveNav } from './components/ExlusiveNav';
import { Home } from './components/Home';
import { Footer } from './components/Footer';
import { Login } from './pages/login';
import { SignUp } from './pages/signup';

function App() {
  return (
    <div className="w-full h-auto border-2 border-black 2xl:container 2xl:mx-auto ">
      <ExlusiveNav />  
      {/* <Index/>  */}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/shopnow" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
