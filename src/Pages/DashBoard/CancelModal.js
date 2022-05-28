import React from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";

const CancelModal = ({ cancelModal, setCancelModal, refetch }) => {
  const handleOrderDelete = (id) => {
    const url = `https://immense-plains-72444.herokuapp.com/orderdeleted/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("asscessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          setCancelModal(null);
          toast.success("Delete Success");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="cancelModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h2>
            Are You Sure You Cancel{" "}
            <span className="font-bold text-red-600">
              {cancelModal?.productname}
            </span>{" "}
            this Order{" "}
          </h2>
          <div className="modal-action">
            <label
              onClick={() => handleOrderDelete(cancelModal._id)}
              className="btn bg-red-500 text-white"
            >
              Delete
            </label>
            <label htmlFor="cancelModal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelModal;
