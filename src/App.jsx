import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import ReactGA from "react-ga4";

import Home from "./pages/Home";
import Starter from "./pages/Starter";
import Business from "./pages/Business";
import Platform from "./pages/Platform";
import Ecommerce from "./pages/Ecommerce";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Track route changes
function RouteTracker() {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname });
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteTracker />
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




