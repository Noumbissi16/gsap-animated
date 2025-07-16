import gsap from "gsap";
import About from "./components/About";
import Hero from "./components/Hero";
import { ScrollTrigger } from "gsap/all";
import "./index.css";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger);
const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      {/* <section className="h-screen " /> */}
    </div>
  );
};

export default App;
