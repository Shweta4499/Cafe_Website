import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Specials from "./components/Specials";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-[#fdf6f0] text-[#3c2f2f]">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Specials/>
      <Contact />
      <Footer/>
      
    </div>
  );
}

export default App;
