import React from 'react';
import Slider from "react-slick";

import YouTubePlayer from 'react-player/youtube';

function SimpleSlider () {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };
  
  return (
    <Slider {...settings}>
      <YouTubePlayer url="https://www.youtube.com/watch?v=v3H0rkk1pS0"></YouTubePlayer>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div>
    </Slider>
  );
}

export default SimpleSlider