import Home from "./home";
import About from "./about";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./navbar";
import Contact from "./contact";
import CreateAd from "./createad";
import Footer from "./footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/createad" element={<CreateAd/>} />
        </Routes>
        <Footer/>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
