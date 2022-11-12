import React from "react";
import bgImage from "../../../assets/images/bg.png";
import chair from "../../../assets/images/chair.png";

const Banner = () => {
  return (
    <div>
      <div className="hero" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className="hero-content flex-col lg:flex-row-reverse p-10">
          <img src={chair} className="rounded-lg w-1/2 shadow-2xl" alt="" />
          <div>
            <h1 className="text-3xl font-bold">Your New Smile Starts Here!</h1>
            <p className="py-6 pr-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white font-normal hover:bg-gradient-to-r hover:from-rose-400 hover:to-rose-700 ">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
