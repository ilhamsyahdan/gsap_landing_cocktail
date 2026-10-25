import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef(null);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", {
      type: "chars, words",
    });
    const paragraphSplit = new SplitText(".subtitle", {
      type: "lines",
    });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));
    gsap.from(heroSplit.chars, {
      yPercent: 100,
      duration: 1.5,
      ease: "expo.out",
      stagger: 0.08,
    });

    gsap.from(paragraphSplit.lines, {
      yPercent: 100,
      opacity: 0,
      duration: 1,
      delay: 1,
      ease: "expo.out",
      stagger: 0.08,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".right-leaf", { y: 200 }, 0)
      .to(".left-leaf", { y: -200 }, 0);

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    const video = videoRef.current;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: video,
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    const setupScrub = () => {
      tl.to(video, { currentTime: video.duration, ease: "none" });
    };

    if (video.readyState >= 1) {
      setupScrub();
    } else {
      video.onloadedmetadata = setupScrub;
    }
  }, []);
  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.webp"
          alt="Fresh green mint leaf decoration left"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.webp"
          alt="Fresh green mint leaf decoration right"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Crisp. Classic.</p>
              <div className="subtitle font-modern-negra text-6xl text-yellow max-w-xl">
                Sip the Spirit <br /> of Summer
              </div>
            </div>

            <div className="view-cocktails">
              <p className="subtitle text-left">
                Every cocktail on your menu is crafted with care, using only the
                freshest ingredients and a passion for perfecting every pour.
              </p>
              <a href="#cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          src="/videos/output.mp4"
          muted
          playsInline
          preload="auto"
        />
      </div>
    </>
  );
};

export default Hero;
