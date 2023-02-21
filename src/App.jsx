import React from "react"
import { useState } from "react"
import Slider from "react-slick"
import { Card } from "./components/Card"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import "./components/Card.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa" 
import Footer from "./components/Footer"

const cards = [ 
  { id: "card-1", name: 'Open-Minded', description: 'Video-Chat Debate App', buttonText: 'repo', link: 'https://github.com/canaano/Open-Minded'}, 
  { id: "card-2", name: 'Card poop', description: 'This is some description', buttonText: 'repo', link: 'https://github.com/canaano/Open-Minded'}, 
  { id: "card-3", name: 'Card 3', description: 'This is some description' , buttonText: 'repo', link: 'https://github.com/canaano/Open-Minded'}, 
  { id: "card-4", name: 'Card 4', description : 'This is some description', buttonText: 'repo', link: 'https://github.com/canaano/Open-Minded'}
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
    speed: 200,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    slidesToScroll: 3,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
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
    <div className="mb-[-100px]">
      <Hero />
    </div>
    <div className=" p-20 ">
      <Slider {...settings} >
        {cards.map((card) => (
          <div key={card.id} className="p-3">
           <Card data={card} />
          </div>
        ))}
      </Slider>
    </div>
    <div>
    <Footer />
    </div>
  </div>
)


  
}

export default App
