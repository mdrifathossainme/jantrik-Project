import React from "react";
import { toast } from "react-toastify";

const ProductModal = ({ refetch, setAllProductsModal, allProductsModal }) => {
  const handleAllProductDelete = (id) => {
    const url = `http://localhost:5000/product/${id}`;
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
          setAllProductsModal(null);
          toast.success("Delete Success");
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="AllProducts" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h2>
            Are You Sure You Cancel{" "}
            <span className="font-bold text-red-600">
              {allProductsModal?.name}
            </span>{" "}
            this Order{" "}
          </h2>
          <div class="modal-action">
            <label
              onClick={() => handleAllProductDelete(allProductsModal._id)}
              class="btn bg-red-500 text-white"
            >
              Delete
            </label>
            <label for="AllProducts" class="btn">
              Cancel            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductModal;
