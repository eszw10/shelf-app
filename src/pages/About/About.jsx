import Developers from "./Developers";
import Features from "./Features";
import Shelf from "./Shelf";

const About = () => {
  return (
    // <div className="px-9 pt-4 pb-10 flex flex-col gap-7 w-full bg-slate-100">
    <div className="flex flex-col py-14 justify-center items-center gap-32 w-full bg-slate-100">
      <Shelf />
      <Features />
      <Developers />
    </div>
  );
};

export default About;
