import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Contact from "./Pages/Contact";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
AOS.init();

export default App;
