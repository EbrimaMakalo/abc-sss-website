import Navbar from "./components/Navbar";
// import FrontPage from "./components/FrontPage";
import Home from "./components/Home";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import About from "./components/About";
import Admission from "./components/Admission";
import Sports from "./components/Sports";
import ImageGallery from "./components/ImageGallery";
import VideoGallery from "./components/VideoGallery";
import Slider from "./components/Slider";

function App() {
  return (
    <>
      <Navbar />
      {/* <FrontPage /> */}
      <Slider />
      <Home />
      <About />
      <Admission />
      <Sports />
      <ImageGallery />
      <VideoGallery />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
