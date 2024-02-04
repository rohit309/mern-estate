import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Signin from './pages/signin';
import About from './pages/about';
import Profile from './pages/profile';
import Signup from './pages/signup';
import Header from './componets/header';


export default function App() {
  return <BrowserRouter> 
  <Header></Header>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/signin" element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/about" element={<About />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>;
  
}
