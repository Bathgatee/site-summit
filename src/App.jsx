import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Starter from "./pages/Starter";
import Business from "./pages/Business";
import Platform from "./pages/Platform";
import Ecommerce from "./pages/Ecommerce";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/starter" element={<Starter />} />
            <Route path="/business" element={<Business />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/ecommerce" element={<Ecommerce />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

