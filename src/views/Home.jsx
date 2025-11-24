import About from "../components/Home/About";
import Hero from "../components/Home/Hero";
import Highlights from "../components/Home/Highlights";
import Skills from "../components/Home/Skills";
import TechStack from "../components/Home/TechStack";

function Home() {
  return (
    <div className="h-full flex flex-col gap-y-24 md:gap-y-34">
      <Hero />
      <Highlights />
      <About />
      <Skills />
      <TechStack />
    </div>
  );
}

export default Home;
