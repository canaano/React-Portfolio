import React from "react"
import { useState } from "react"
import Slider from "react-slick"
import { Card } from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import "./components/Card.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa" 

const cards = [ 
  { id: "card-1", name: 'Card 1', description: 'This is some description', buttonText: 'repo'}, 
  { id: "card-2", name: 'Card poop', description: 'This is some description', buttonText: 'repo'}, 
  { id: "card-3", name: 'Card 3', description: 'This is some description' , buttonText: 'repo'}, 
  { id: "card-4", name: 'Card 4', description : 'This is some description', buttonText: 'repo'}
];


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
    <div className="Slider p-6">
      <Slider {...settings} >
        {cards.map((card) => (
          <div key={card.id}>
           <Card data={card}/>
          </div>
        ))}
      </Slider>
    </div>
  </div>
)


  
}

export default App
