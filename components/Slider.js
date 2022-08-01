import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react';

export default function Slider({slides}) {
  

    const [ currentIndex, setCurrentIndex ] = useState(0);

    const sliderStyles = {
        height: '100%',
        position: 'relative',
    }
    const slideStyles = {
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundImage: "url(" + slides[currentIndex].url + ")", 
    }

    const rightArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        right: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };
      
      const leftArrowStyles = {
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        left: "32px",
        fontSize: "45px",
        color: "#fff",
        zIndex: 1,
        cursor: "pointer",
      };

      const heroTextStyles = {
        position: "absolute",
        top: "60%",
        transform: "translate(0, -50%)",
        left: "100px",
        fontSize: "2rem",
        backgroundColor: "rgba(17, 17, 17, 0.65)",
        color: "#fff",
        zIndex: 1,
        width: "50%",
        height: "50%",
        cursor: "pointer",

      };
      
      const goToPrevious = () => {
        const isFirstSLide = currentIndex === 0;
        const newIndex = isFirstSLide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
      }

      const goToNext = () => {
        const isLastSLide = currentIndex === slides.length - 1;
        const newIndex = isLastSLide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
      }

      //let si = setInterval(goToNext, 3000);
      //si;

        
    
  return (
    <div style={sliderStyles}>
        <div style={leftArrowStyles} onClick={goToPrevious}> ← </div>
        <div style={rightArrowStyles} onClick={goToNext}> → </div>
        <div style={heroTextStyles}>
          <p>Welcome</p>
          <p>CAVIC is a creative hub that provides creatives with access to facilities to enable them pick up new skills, make them more visible and help them generate wealth in the creative ecosystem of Africa</p>
        </div>
        <div style={slideStyles}>

        </div>
    </div>
  )
  
}