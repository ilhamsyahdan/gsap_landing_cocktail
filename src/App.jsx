import { lazy, Suspense } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const BelowFold = lazy(() => import("./components/BelowFold"));

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <BelowFold />
      </Suspense>
    </main>
  );
};

export default App;
