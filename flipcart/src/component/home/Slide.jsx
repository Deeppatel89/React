import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const responsive = {
    desktop:{
        breakpoint:{ max:3000,min:1024 },
       
    }
}



const Slide = ({ posts }) => {
    return (
        <div>
            <Carousel
                autoPlay={true}
                autoPlaySpeed={1000}
                infiniteLoop={true}
                showThumbs={false}
            >
                {posts.map((product)=>{
                    return(
                        <>
                        <img src={product.url} alt="" />
                        </>
                    )

                })}


            </Carousel>

        </div>
    )
}

export default Slide
