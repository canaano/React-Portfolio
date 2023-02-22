import React, { useState, useEffect, useLayoutEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Slider from "react-slick";
import { Card } from "./components/Card";
import "./components/Card.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Footer from "./components/Footer";
import About from "./components/About";
import { AiOutlineConsoleSql } from "react-icons/ai";

const cards = [
  {
    id: "card-1",
    name: "Open-Minded",
    description:
      "Drop in and join a private video conference to debate the worlds biggest issues.",
    buttonText: "repo",
    link: "https://github.com/canaano/Open-Minded",
    logo: "./src/assets/Open-Mind-Logo.png",
  },

  {
    id: "card-2",
    name: "Surfs Up Surf Report",
    description:
      "Find out if there are waves around YOU! Input your city and our application finds the local surf report.",
    buttonText: "repo",
    link: "https://github.com/canaano/Surfs-Up-Surf-Report",
    logo: "./src/assets/Surfs-Up.png",
  },

  {
    id: "card-3",
    name: "React Portfolio",
    description:
      "Deployed Website of the work completed by Canaan Owens in a simple, yet effective, React Application",
    buttonText: "repo",
    link: "https://github.com/canaano/React-Portfolio",
    logo: "./src/assets/React-Port.png",
  },

  {
    id: "card-4",
    name: "Password Generator",
    description:
      "Create a unique, randomly generated password to protect yourself against hackers",
    buttonText: "repo",
    link: "https://github.com/canaano/PasswordGenerator",
    logo: "./src/assets/PassGen.png",
  },
];

const getSlideCount = () => {
  if (window.innerWidth < 1300 && window.innerWidth > 900) {
    return 2;
  } else if (window.innerWidth < 900) {
    return 1;
  } else {
    return 3;
  }
};

function App() {
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    lazyload: true,
    speed: 300,
    centerPadding: "50px",
    slidesToShow: getSlideCount(),
    centerMode: true,
    slidesToScroll: 1,
  });
  const [currentActiveIndex, setCurrentActiveIndex] = useState(null);

  const NextArrow = ({ onclick }) => {
    return (
      <div className="arrow next" onClick={onclick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onclick }) => {
    return (
      <div className="arrow prev" onClick={onclick}>
        <FaArrowLeft />
      </div>
    );
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      //if innerWidth is less than some value, change to 2 per slide or 1 per slide
      if (window.innerWidth < 1300 && window.innerWidth > 900) {
        setSliderSettings({ ...sliderSettings, slidesToShow: 2 });
      } else if (window.innerWidth < 900) {
        setSliderSettings({ ...sliderSettings, slidesToShow: 1 });
      } else {
        setSliderSettings({ ...sliderSettings, slidesToShow: 3 });
      }
    });
    return () => window.removeEventListener("resize", () => null);
  }, []);

  const handleSlideChange = (n) => {
    console.log("slide change", n);
    setCurrentActiveIndex(n);
  };

  // Carousel layout
  return (
    <div>
      <Navbar />
      <div className="mb-[-100px]">
        <Hero />
      </div>
      <div>
        <About />
      </div>
      <div className=" p-20 ">
        <Slider afterChange={handleSlideChange} {...sliderSettings}>
          {cards.map((card, i) => {
            const isActive =
              sliderSettings.slidesToShow === 2
                ? currentActiveIndex === i ||
                  currentActiveIndex === (i + 1) % cards.length
                : currentActiveIndex === i;
            console.log(currentActiveIndex, isActive);
            return (
              <div key={card.id}>
                <Card isActive={isActive} data={card} />
              </div>
            );
          })}
        </Slider>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
