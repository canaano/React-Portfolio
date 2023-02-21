import React, { Component } from "react"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Slider from "react-slick"
import { Card } from "./components/Card"
import "./components/Card.css"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa" 
import Footer from "./components/Footer"
import About from "./components/About"

const cards = [ 
  { id: "card-1", 
    name: 'Open-Minded', 
    description: 'Drop in and join a private video conference to debate the worlds biggest issues.', 
    buttonText: 'repo', 
    link: 'https://github.com/canaano/Open-Minded', 
    logo: './src/assets/Open-Mind-Logo.png'}, 

  { id: "card-2",  
    name: 'Surfs Up Surf Report', 
    description: 'Find out if there are waves around YOU! Input your city and our application finds the local surf report.', 
    buttonText: 'repo', 
    link: 'https://github.com/canaano/Surfs-Up-Surf-Report', 
    logo: './src/assets/Surfs-Up.png'},
  
  { id: "card-3", 
    name: 'React Portfolio', 
    description: 'Deployed Website of the work completed by Canaan Owens in a simple, yet effective, React Application' , 
    buttonText: 'repo', 
    link: 'https://github.com/canaano/React-Portfolio', 
    logo: './src/assets/React-Port.png'},
  
  { id: "card-4", 
    name: 'Password Generator', 
    description : 'Create a unique, randomly generated password to protect yourself against hackers', 
    buttonText: 'repo', 
    link: 'https://github.com/canaano/PasswordGenerator', 
    logo: './src/assets/PassGen.png'}
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
    speed: 3000,
    slidesToShow: 3,
    centerMode: true,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear"
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
    <div>
      <About />
    </div>
    <div className=" p-20 ">
      <Slider {...settings} >
        {cards.map((card) => (
          <div key={card.id} >
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
