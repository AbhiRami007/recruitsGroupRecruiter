import React, { useState } from "react";
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/background/bg1.png";
import logo from "../../assets/images/logo/logo.png";
import logoHorizontal from "../../assets/images/logo/logo_horizontal.png";
import Slider from '../ImageSlider/Slider'

function Auth({ setSigninPage, signinPage, signupPage }) {
  // const [signinPage, setSigninPage] = useState(false);

  let media = window.screen.width < 600;
  return (
    // <div
    //   style={media ? { display: "flex" } : { display: "none" }}
    //   id="signup-mobile"
    //   className="signup-image-sec"
    // >
    //   <div className="left-logo-cont">
    //     <img className="logo-img" alt="logo" src={logo} />
    //   </div>
    //   <div className="left-bg-cont">
    //     <img className="signup-bg-img" alt="background" src={bg1} />
    //     <div className="signup-logo-text-cont">
    //       <h5 className="sign-head">
    //         Tap, connect <br />
    //         and be hired.
    //       </h5>
    //       <span className="sign-p">
    //         Explore of the most exiting jobs roles based on your interests and
    //         study major
    //       </span>
    //     </div>
    //   </div>
    //   <div className="mobile-only-options-div">
    //     <div className="sign-options">sign in</div>
    //     <div className="sign-options">sign up</div>
    //   </div>
    // </div>
    <div
      style={media ? signinPage ? { display: "none" } : { display: "flex" } : null}
      className="signup-image-sec"
    >
      <div className="left-logo-cont" style={media ? { display: 'flex', justifyContent: 'center', alignItems: 'center' } : null}>
        <img className="logo-img" style={media ? { width: '60%' } : null} src={media ? logoHorizontal : logo} />
      </div>
      <div style={media ? { display: "flex" } : { display: "none" }} className="left-bg-cont">
        <img className="signup-bg-img" src={bg1} />
        <div className="signup-logo-text-cont">
          <h5 className="sign-head">
            Tap, connect <br />
            and be hired.
          </h5>
          <span className="sign-p">
            Explore of the most exiting jobs roles based on your intrest and
            study major
          </span>
        </div>
      </div>
      <Slider />
      <div className="mobile-only-options-div">
        <div className="sign-options" onClick={() => setSigninPage(true)}>
          sign in
        </div>
        <Link className="sign-options" to="/auth/sign-up">
          sign up
        </Link>
      </div>
    </div>
  );
}

export default Auth;
