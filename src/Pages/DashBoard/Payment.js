import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L0f5ODF4jr9Eb1gaJNlGaHr8vxO6jWXWmdAngCkj8oSpZK1gFhXUrXlrCukYH7qWgU9ttMs8uo86s9dxtB9OLeY00BNmwf0Tg"
);
const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/myorder/${id}`;

  const { data, isLoading } = useQuery("doctor", () =>
    fetch(url).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div className="card px-12 my-8 w-[90%]  bg-base-100 shadow-xl ">
        <div className="card-body">
          <h2 className="card-title text-success font-bold">
            Hello {data.username}{" "}
          </h2>
          <h2 className="text-2xl font-semibold">
            Place pay For{" "}
            <span className="text-success font-bold">{data?.productname}</span>
          </h2>
          <h6 className="font-bold">Qunatity: {data.quantity}</h6>
          <h6 className="font-bold">Price per unit: ${data.price}</h6>
          <h6 className="font-bold">Total price: ${data.totalPrice}</h6>
        </div>
      </div>
      <div className="card px-12 w-[90%] bg-base-100 shadow-xl">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm data={data} />
          </Elements>
        </div>
      </div>
    </>
  );
};

export default Payment;
