import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/signin';
import About from './pages/about';
import Profile from './pages/profile';
import Signup from './pages/signup';


export default function App() {
  return <BrowserRouter> 
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/sign-in" element={<Signin />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>;
  
}
