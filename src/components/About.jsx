import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeLine = gsap.timeline({
      scrollTrigger: {
        trigger: "#about",
        start: "top center",
      },
    });

    scrollTimeLine
      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.inOut",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5",
      );
  }, []);
  return (
    <section id="about">
      <div className="mb-16 px-5 md:px-0">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail - from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.{" "}
            </p>

            <div>
              <p className="md:text-3xl font-bold text-xl">
                <span>4.5</span>/5
              </p>
              <p className="text-sm text-white-100">More than +120000</p>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="noisy">
            <img
              src="/images/abt1.webp"
              alt="Bartender preparing a cocktail"
              fetchPriority="low"
            />
          </div>
        </div>
        <div className="md:col-span-6">
          <div className="noisy">
            <img
              src="/images/abt2.webp"
              alt="Signature DAN Cocktail drink"
              fetchPriority="low"
            />
          </div>
        </div>
        <div className="md:col-span-3">
          <div className="noisy">
            <img
              src="/images/abt5.webp"
              alt="Fresh cocktail ingredients"
              fetchPriority="low"
            />
          </div>
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="noisy">
            <img
              src="/images/abt2.webp"
              alt="Close-up of premium cocktail"
              fetchPriority="low"
            />
          </div>
        </div>
        <div className="md:col-span-4">
          <div className="noisy">
            <img
              src="/images/abt4.webp"
              alt="Modern cocktail bar atmosphere"
              fetchPriority="low"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
