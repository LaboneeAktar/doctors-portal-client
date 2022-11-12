import React from "react";
import clockImg from "../../../assets/icons/clock.svg";
import locationImg from "../../../assets/icons/marker.svg";
import phoneImg from "../../../assets/icons/phone.svg";

const InfoCards = () => {
  const cardInfo = [
    {
      id: "01",
      title: "Opening Hours",
      info: "9.00AM - 5.00PM Everyday",
      img: clockImg,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
    {
      id: "02",
      title: "Visit Our Location",
      info: "Brooklyn, NY 10036, United States",
      img: locationImg,
      bgClass: "bg-accent",
    },
    {
      id: "03",
      title: "Contact Us Now",
      info: "+000 123 456789",
      img: phoneImg,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="my-20">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {cardInfo.map((singlecard) => (
          <div
            key={singlecard.id}
            className={`card card-side shadow-xl px-6 py-3 text-white font-normal ${singlecard.bgClass}`}
          >
            <figure>
              <img src={singlecard.img} alt="..." />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{singlecard.title}</h2>
              <p>{singlecard.info}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
