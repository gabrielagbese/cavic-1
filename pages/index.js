import Head from 'next/head'
import Image from 'next/image'
import Slider from '../components/Slider'
import styles from '../styles/Home.module.css'
import Intro from '../components/Intro'
import Features from '../components/Features'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import your icons
import { fabrand, faHighlighter } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const slides = [
    {url: '/images/slider/slide1.jpg', title: 'Slide 1'},
    {url: '/images/slider/slide2.jpg', title: 'Slide 2'},
    {url: '/images/slider/slide3.jpg', title: 'Slide 3'},
    {url: '/images/slider/slide4.jpg', title: 'Slide 4'},
    {url: '/images/slider/slide5.jpg', title: 'Slide 5'},
]

  
      const containerStyles = {
        width: '100vw',
        height: '80vh',
        margin: '0',
        borderRadius: '10px',
        
      };


  return (
    <div className={styles.container}>
      <div style={containerStyles}>
        <Slider slides={slides}/>
      </div>
      <Intro/>
      <Features/>
      
    </div>
  )
}