import Home from "./home";
import About from "./about";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Navbar from "./Navbar";
import Contact from "./contact";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact/>} />
        </Routes>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
