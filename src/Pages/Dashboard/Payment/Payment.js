import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";
import Loading from "../../Shared/Loading/Loading";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();
  const { treatment, price, appointmentDate, slot } = booking;

  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="text-2xl px-5 py-10">Payment Now for {treatment}</h1>
      <p className="text-xl py-5">
        Please pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}.
      </p>
      <div className="w-96 my-12">
        <Elements stripe={stripePromise}>
          <CheckoutForm booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
