import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Footer from "./components/footer";

const App = () => {
  const handleOnClick = () => {
    window.open(
      "https://drive.google.com/file/d/1rL5UNbYL0bVnT9z3Q55bDAXIC69tQ6qC/view?usp=sharing"
    );
  };
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <div className="flex justify-center items-center py-3 px-8">
          <button
            type="submit"
            onClick={handleOnClick}
            className="bg-[#915eff] py-3 px-8 h-16 hover:bg-tertiary  outline-none xs:mt-5 w-fit text-white font-bold shadow-md shadow-primary rounded-xl text-2xl"
          >
            Download Resume
          </button>
        </div>

        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
