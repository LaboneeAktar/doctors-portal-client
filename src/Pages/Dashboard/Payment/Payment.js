import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  const { treatment, price, appointmentDate, slot } = booking;

  return (
    <div>
      <h1 className="text-2xl px-5 py-10">Payment Now for {treatment}</h1>
      <p className="text-xl py-5">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}.
      </p>
    </div>
  );
};

export default Payment;
