import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RentalSection from "./components/RentalSection";
import WhyUsSection from "./components/WhyUsSection";
import Rent from "./pages/Rent";

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <HeroSection />
                <RentalSection />
                <WhyUsSection />
              </>
            }
          />
          <Route path="/rent" element={<Rent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
