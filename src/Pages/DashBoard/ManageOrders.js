import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading";
import CancelModal from "./CancelModal";

const MyOrder = () => {
  const url = "http://localhost:5000/manageorder";
  const { data, isLoading, refetch } = useQuery("allorder", () =>
    fetch(url).then((res) => res.json())
  );
  const [cancelModal, setCancelModal] = useState(null);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="pl-12 lg:px-4 py-8  ">
      <h1 className="text-4xl pb-8 lg:pb-0">All Order</h1>
      <div className="overflow-x-auto lg:py-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>User</th>
              <th>Email</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Cancel order</th>
            </tr>
          </thead>
          <tbody>
            {data?.reverse().map((dt, index) => (
              <tr key={dt._id}>
                <th>{index + 1}</th>
                <td>{dt.username}</td>
                <td>{dt.email}</td>
                <td>{dt.productname}</td>
                <td>${dt.quantity}</td>
                <td>${dt.price}</td>
                <td>$ {dt.totalPrice}</td>
                <td>
                  {dt.paid ? (
                    <>
                      {" "}
                      <span className="text-success uppercase font-bold">
                        {" "}
                        Paid
                      </span>{" "}
                    </>
                  ) : (
                    <>
                      {" "}
                      <span className="text-red-500 uppercase font-bold">
                        Un Paid
                      </span>{" "}
                    </>
                  )}
                </td>
                <td>
                  {!dt.paid ? (
                    <>
                      {" "}
                      <label
                        onClick={() => setCancelModal(dt)}
                        for="cancelModal"
                        className="btn modal-button btn-xs btn-error "
                      >
                        Cancel
                      </label>{" "}
                    </>
                  ) : (
                    <> </>
                  )}
                </td>
                <td></td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {cancelModal && (
        <CancelModal
          refetch={refetch}
          setCancelModal={setCancelModal}
          cancelModal={cancelModal}
        ></CancelModal>
      )}
    </div>
  );
};

export default MyOrder;
