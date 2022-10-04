import React from 'react';
import Slider from "react-slick";

import './SimpleSlider.css'
import YouTubePlayer from 'react-player/youtube';

function SimpleSlider () {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [ // 반응형 웹 구현 옵션
		{  
			breakpoint: 960, //화면 사이즈 960px일 때
			settings: {
				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
				// slidesToShow:3 
			} 
		},
		{ 
			breakpoint: 768, //화면 사이즈 768px일 때
			settings: {	
				//위에 옵션이 디폴트 , 여기에 추가하면 그걸로 변경
				// slidesToShow:2 
			} 
		}
	]
  };
  
  return (
    <Slider {...settings}>
      <div>
        <img src="img/fullmoon.png"/>
      </div>
      <div>
        <img src="img/passion_week1.png"/>
      </div>
      {/* <div>
        <img src="https://placeimg.com/1920/450/any" />
      </div> */}
      {/* <div>
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
      </div> */}
    </Slider>
  );
}

export default SimpleSlider