import Navbar from "./components/Navbar";
import FrontPage from "./components/FrontPage";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import About from "./components/About";
import Admission from "./components/Admission";
import Sports from "./components/Sports";
import ImageGallery from "./components/ImageGallery";

function App() {
  return (
    <>
      <Navbar />
      <FrontPage />
      <Home />
      <About />
      <Admission />
      <Sports />
      <ImageGallery />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
