"use client";
import { useRef, useState } from "react";
import { sliderLists } from "../../constants";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Menu = () => {
  const contentRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalCocktails = sliderLists.length;

  const nextSlide = (index) => {
    const newIndex = (index + totalCocktails) % totalCocktails;
    setCurrentIndex(newIndex);
  };

  const getCocktailAt = (indexOfSet) => {
    return sliderLists[
      (currentIndex + indexOfSet + totalCocktails) % totalCocktails
    ];
  };

  const currentCocktail = getCocktailAt(0);
  const prevCocktail = getCocktailAt(-1);
  const nextCocktail = getCocktailAt(1);

  useGSAP(() => {
    gsap.fromTo(
      "#title",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
      },
    );

    gsap.fromTo(
      ".cocktail img",
      {
        opacity: 0,
        xPercent: -100,
      },
      {
        opacity: 1,
        xPercent: 0,
        duration: 1,
        ease: "power1.inOut",
      },
    );

    gsap.fromTo(
      ".details h2",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 100,
        yPercent: 0,
        ease: "power1.inOut",
      },
    );
    gsap.fromTo(
      ".details p",
      {
        opacity: 0,
        yPercent: 100,
      },
      {
        opacity: 100,
        yPercent: 0,
        duration: 0.5,
        ease: "power1.inOut",
      },
    );
  }, [currentIndex]);
  return (
    <section id="menu">
      <img
        src="/images/slider-left-leaf.webp"
        alt="left-leaf"
        id="m-left-leaf"
      />
      <img
        src="/images/slider-right-leaf.webp"
        alt="right-leaf"
        id="m-right-leaf"
      />

      <div id="menu-heading" className="sr-only">
        Cocktail Menu
      </div>

      <div className="cocktail-tabs">
        {sliderLists.map((item, index) => {
          const isActive = index === currentIndex;

          return (
            <button
              key={item.id}
              className={`${
                isActive
                  ? "text-orange-300 border-white"
                  : "text-white/50 border-white/50"
              }`}
              onClick={() => nextSlide(index)}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      <div className="content">
        <div className="arrows">
          <button
            className="text-left cursor-pointer"
            onClick={() => nextSlide(currentIndex - 1)}
          >
            <span>{prevCocktail.name}</span>
            <img src="/images/right-arrow.png" alt="right-arrow" />
          </button>
          <button
            className="text-left cursor-pointer"
            onClick={() => nextSlide(currentIndex + 1)}
          >
            <span>{nextCocktail.name}</span>
            <img src="/images/left-arrow.png" alt="left-arrow" />
          </button>
        </div>

        <div className="cocktail">
          <img
            src={currentCocktail.image}
            alt="img"
            className="object-contain"
          />
        </div>

        <div className="recipe">
          <div ref={contentRef} className="info">
            <p>Recipe for:</p>
            <p id="title">{currentCocktail.name}</p>
          </div>

          <div className="details">
            <h2>{currentCocktail.title}</h2>
            <p>{currentCocktail.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
