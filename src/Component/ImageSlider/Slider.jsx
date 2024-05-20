import React from 'react'
import { Carousel } from "rsuite";

function Slider() {
    return (
      <Carousel autoplay className="custom-slider">
        <img
          src="banner2.png"
          height="250"
        />
        <img
          src="banner3.png"
          height="250"
        />
        <img
          src="banner4.png"
          height="250"
        />
        <img
          src="banner1.png"
          height="250"
        />
        <img
          src="banner5.png"
          height="250"
        />
        <img
          src="banner6.png"
          height="250"
        />
      </Carousel>
    );
}

export default Slider