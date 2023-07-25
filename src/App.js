import './App.css';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Registration from './component/Registration';
import Student from './component/Student';
import Home from './component/Home';
import About from './component/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/navbar" element={<Navbar/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/student" element={<Student/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Registration/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
