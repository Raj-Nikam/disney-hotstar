import React from 'react'
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

function Slider() {
    return (
        <section className="mt-7 relative shadow-2xl max-w-screen-2xl mx-auto">
            <Carousel 
             autoPlay
             infiniteLoop
             showIndicators={false}
             showStatus={false}
             showThumbs={false}
             interval={2000}
            >
            <div>
                <img loading="lazy" src="/images/slider-1.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="/images/slider-2.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="/images/slider-3.jpg" alt="" />
            </div>
            <div>
                <img loading="lazy" src="/images/slider-4.jpg" alt="" />
            </div>
            </Carousel>
        </section>
    )
}

export default Slider
