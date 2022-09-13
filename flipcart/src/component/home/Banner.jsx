import { styled } from '@mui/material/styles'
import React from 'react'
// import Carousel from 'react-multi-carousel'
import { Carousel } from 'react-responsive-carousel';
import { bannerData } from '../constans/data'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Image = styled("img")({
    width:"100%",
    height:280,
})




const Banner = () => {
  return (
   <Carousel
   autoPlay={true}
   autoPlaySpeed={1000}
   infiniteLoop={true}
   showThumbs={false}
   >
    {
        bannerData.map((data)=>{
            return(
                <Image src={data.url} alt="" />
            )
        })
    }
   </Carousel>
  )
}

export default Banner