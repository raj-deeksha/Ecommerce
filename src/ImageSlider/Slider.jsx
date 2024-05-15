import React from 'react'
import { Carousel } from "rsuite";

function Slider() {
    return (
      <Carousel autoplay className="custom-slider">
        <img
          src="https://www.ajio.com/s/up-to-65-percent-off-5426-51251"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=2"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=3"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=4"
          height="250"
        />
        <img
          src="https://via.placeholder.com/600x250/8f8e94/FFFFFF?text=5"
          height="250"
        />
      </Carousel>
    );
}

export default Slider