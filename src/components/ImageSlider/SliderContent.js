import React from "react";

function SliderContent({ activeIndex, ImageSlider }) {
  // const deviceType = () => {
  //   const ua = navigator.userAgent;
  //   if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
  //     return "tablet";
  //   } else if (
  //     /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
  //       ua
  //     )
  //   ) {
  //     return "mobile";
  //   }
  //   return "desktop";
  // };

  // const device = deviceType();
  return (
    <section className="image-slider-section">
      {
        ImageSlider.map((slide, index) => (
          <a ><div
            key={index}
            className={index === activeIndex ? "slides active" : "inactive"}
          >
            <img className="slide-image" src={slide.image} alt={index} />
            <div className="signup-logo-text-cont">
              <h5 className="sign-head">
                Tap, connect <br />
                and be hired.
              </h5>
              <span className="sign-p">
                Explore of the most exiting jobs roles based on your interests and
                study major
              </span>
            </div>
          </div></a>
        ))}

    </section>
  );
}

export default SliderContent;
