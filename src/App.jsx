import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ExlusiveNav } from './components/ExlusiveNav';
import { Home } from './components/Home';

function App() {
  return (
    <div className="w-full h-screen border-2 border-black 2xl:container 2xl:mx-auto">
      <ExlusiveNav />
      <Routes>
        <Route path="/" element={<div></div>} />
        <Route path="/shopnow" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
