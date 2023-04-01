import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
// import ImageSlider from "./ImageSlider";
import Dots from "./Dots";
import "./Slider.css";
import banner1 from "../../assets/images/background/bg1.png";
import banner2 from "../../assets/images/background/career_progress.svg";
import banner3 from "../../assets/images/background/interview.svg";


function Slider(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [ImageSlider, setImageSlider] = useState([{
    image: banner1
  }, {
    image: banner2
  }, {
    image: banner3
  },
  ])
  let media = window.screen.width < 600;
  // console.log(media);
  useEffect(() => {

    const len = ImageSlider.length - 1;
    let interval;
    console.log(len, "dcd");
    if (len != 0) {
      interval = setInterval(() => {
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1);
      }, 5000);
    } else {
      setActiveIndex(0)
    }
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="slider-container" style={media ? { display: "none" } : { display: "block" }}>
      <SliderContent activeIndex={activeIndex} ImageSlider={ImageSlider} />
      <Dots
        activeIndex={activeIndex}
        ImageSlider={ImageSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}

export default Slider;
