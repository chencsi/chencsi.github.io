import About from "../components/Home/About";
import Education from "../components/Home/Education";
import Hero from "../components/Home/Hero";
import Highlights from "../components/Home/Highlights";
import Skills from "../components/Home/Skills";

function Home() {
  return (
    <div className="h-full flex flex-col gap-y-24 md:gap-y-34">
      <Hero />
      <Highlights />
      <About />
      <Skills />
    </div>
  );
}

export default Home;
