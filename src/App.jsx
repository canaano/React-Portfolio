import React from "react"
import { useState } from "react"
import Slider from "react-slick"
import Card from "./components/Card"
import { Card2, Card3, Card4 } from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import "./components/Card.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa" 

const cards = [Card, Card2, Card3, Card4]

function App() {

  const NextArrow = ({onclick}) => {
    return (
      <div className="arrow next" onClick={onclick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({onclick}) => {
    return (
      <div className="arrow prev" onClick={onclick}>
        <FaArrowLeft />
      </div>
    )
  }

  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
// Normal layout
  // return (
  //   <div>
  //     <Navbar />
  //     <Hero />
  //     <div className="flex flex-wrap justify-center p-4">
  //       <div className="p-6">
  //         <Card />
  //       </div>
        
  //       <Card />
  //       <Card />
  //       <Card />
  //     </div>
  //   </div>
  // )


// Carousel layout
return (
  <div>
    <Navbar />
    <Hero />
    <div className="Slider">
      <Slider>
        {cards.map((card, index) => (
          <div>
            <Card />
          </div>
        ))}
      </Slider>
    </div>
  </div>
)


  
}

export default App
