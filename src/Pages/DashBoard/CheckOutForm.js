import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import Loading from "../../Components/Loading/Loading";
import MyOrder from "./MyOrder";

const CheckoutForm = ({ data }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [cartError, setCartErro] = useState("");
  const [success, setSuccess] = useState("");
  const [paymentIntent, setPaymentIntent] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [prosseccing, setProsseccing] = useState(false);

  const { _id, price, patient, patientName } = data;
  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
      },
      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((adata) => {
        if (adata.clientSecret) {
          setClientSecret(adata.clientSecret);
        }
      });
  }, [price]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    setCartErro(error?.message || "");
    setSuccess(" ");
    setProsseccing(true);

    if (prosseccing === true) {
      return <Loading />;
    }
    const { paymentIntent, error: intenError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: patientName,
            email: patient,
          },
        },
      });
    if (intenError) {
      setCartErro(intenError?.message);
      setProsseccing(false);
    } else {
      setCartErro("");
      setPaymentIntent(paymentIntent.id);
      setSuccess("Congrate you Payment Success");

      const payment = {
        appointment: _id,
        transactionId: paymentIntent.id,
      };

      fetch(`http://localhost:5000/complateorder/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ payment }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setProsseccing(false);
        });
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-success btn-sm mt-2"
          type="submit"
          disabled={!stripe || !clientSecret}
        >
          Pay
        </button>
      </form>
      {cartError && <p className="text-red-500">{cartError}</p>}
      {success && (
        <div>
          <h6 className="text-green-500"> {success}</h6>
          <h6>
            {" "}
            Your Trangation Id{" "}
            <span className="text-orange-500 font-bold">
              {paymentIntent}
            </span>{" "}
          </h6>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
