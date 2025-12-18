import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Home from "./pages/home/Home";
import Header from "./components/shared/header/Header";
import Footer from "./components/shared/footer/Footer";
import { useEffect } from "react";
import "aos/dist/aos.css";
import Aos from "aos";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 800,
      easing: "ease-out-quart",
      once: true,
    });
  }, []);
  return (
    <>
      <Header />
      <Home />
      <Footer />
    </>
  );
}

export default App;
