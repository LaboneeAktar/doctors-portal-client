import React from "react";
import treatment from "../../../assets/images/treatment.png";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

const ExceptionalCare = () => {
  return (
    <div className="mt-16">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row px-28 py-5">
          <img
            src={treatment}
            className="lg:w-1/2 rounded-lg shadow-2xl lg:h-96"
            alt=""
          />
          <div className="px-16 py-16">
            <h1 className="text-3xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6 text-justify">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExceptionalCare;
