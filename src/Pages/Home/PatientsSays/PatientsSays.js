import React from "react";
import Patient from "./Patient";
import person1 from "../../../assets/images/people1.png";
import person2 from "../../../assets/images/people2.png";
import person3 from "../../../assets/images/people3.png";
import qoute from "../../../assets/icons/quote.svg";

const PatientsSays = () => {
  const patientData = [
    {
      id: 1,
      name: "Winson Herry",
      address: "California",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person1,
    },
    {
      id: 2,
      name: "Elon Mask",
      address: "Washing Ton",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person2,
    },
    {
      id: 3,
      name: "Herry Potter",
      address: "Japan",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
      img: person3,
    },
  ];
  return (
    <div className="mt-16">
      <div>
        <div className="flex items-center justify-between">
          <span>
            <h4 className="text-lg text-primary">Testimonial</h4>
            <h1 className=" text-3xl">What Our Patients Says</h1>
          </span>
          <img src={qoute} className="w-24 lg:w-48 lg:h-40" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {patientData.map((patient) => (
          <Patient key={patient.id} patient={patient}></Patient>
        ))}
      </div>
    </div>
  );
};

export default PatientsSays;
