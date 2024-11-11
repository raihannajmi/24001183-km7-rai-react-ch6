import "./App.css";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import RentalSection from "./components/RentalSection";
import WhyUsSection from "./components/WhyUsSection";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <RentalSection />
      <WhyUsSection />
      <Footer />
    </>
  );
}

export default App;
