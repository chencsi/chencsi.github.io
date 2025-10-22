import HomeAbout from "../components/Home/About";
import HomeEducation from "../components/Home/Education";
import HomeHero from "../components/Home/Hero";
import HomeHighlights from "../components/Home/Highlights";
import HomeSkills from "../components/Home/Skills";

function Home() {
  return (
    <div className="h-full flex flex-col gap-y-24 md:gap-y-34">
      <div className="px-5 sm:px-10">
        <HomeHero />
      </div>
      <div className="px-5">
        <HomeHighlights />
      </div>
      <HomeAbout />
      <HomeSkills />
      <HomeEducation />
    </div>
  );
}

export default Home;
