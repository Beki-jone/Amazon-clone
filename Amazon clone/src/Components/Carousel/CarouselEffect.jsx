 import React from 'react'
import {Carousel} from "react-responsive-carousel"
import {img} from "./image/data"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from '../Carousel/Carousel.module.css'
const CarouselEffect = () => {
  return (
    <div>
      <Carousel
      autoPlay={true}
      infiniteLoop={true}
      showIndicators={false}
      showThumbs={false}
      >
        {
img.map((imageItem)=>{
    return <img key={imageItem} src={imageItem} />
})
        }
      </Carousel>
      <div className={classes.hero_img}></div>
    </div>
  )
}
export default CarouselEffect
