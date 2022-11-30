import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData } from "react-router-dom";
import CheckoutForm from "./CheckoutForm";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  const { treatment, price, appointmentDate, slot } = booking || {};

  return (
    <div>
      <h3 className="text-3xl mb-4">Payment for : {treatment}</h3>
      <p className="text-xl">
        Please Pay <strong>${price}</strong> for your appointment on{" "}
        {appointmentDate} at {slot}
      </p>
      <div className="w-96 mt-20">
      <Elements stripe={stripePromise}>
      <CheckoutForm booking={booking} />
    </Elements>
      </div>
    </div>
  );
};

export default Payment;
