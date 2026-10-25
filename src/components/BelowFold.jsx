import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cocktails from "./Cocktails";
import About from "./About";
import Art from "./Art";
import Menu from "./Menu";
import Contact from "./Contact";

const BelowFold = () => {
  useEffect(() => {
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </>
  );
};

export default BelowFold;