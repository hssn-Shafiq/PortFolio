import { Header } from "./Components/Header";
import "./index.css"
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'aos/dist/aos.css';
// import {BrowserRoutes as Routes, Route} from "react-dom"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AOS from 'aos';  
import { useEffect } from 'react';  
import About from "./Pages/About";
import Resume from "./Pages/Resume";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";



function App() {

  useEffect(() => {  
    AOS.init();  
}, []);  


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portfolio" element={<Portfolio />} />
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </Router>
    </>
    
  );
}

export default App;
