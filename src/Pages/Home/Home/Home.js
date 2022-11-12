import React from "react";
import Banner from "../Banner/Banner.js";
import ExceptionalCare from "../ExceptionalCare/ExceptionalCare.js";
import InfoCards from "../InfoCards/InfoCards.js";
import Services from "../Services/Services.js";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Services></Services>
      <ExceptionalCare></ExceptionalCare>
    </div>
  );
};

export default Home;
