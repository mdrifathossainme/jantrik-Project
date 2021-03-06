import React, { useState } from "react";


const DeletedModal = ({
  deleteModald,
  setDetedModal,
  products,
  setProducts,
}) => {
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const handleDeleted = (id) => {

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
          const exit = products.filter((pt) => pt._id !== id);
          setProducts(exit);
          setDetedModal(null);
        }
      });
  };

  const handleDeletedConfirm = (e) => {
    const value = e.target.value;
    if (value === deleteModald.productname) {
      setDeleteConfirm(true);
      if (deleteConfirm) {
          e.target.reset();
      }
    
    } else {
      setDeleteConfirm(false);
    }
  };

  const handleReset = () => {
    const income = document.getElementById('delteidput');
    income.value = ""
    setDeleteConfirm(false)
  }
  

 
  return (
    <>
      <input type="checkbox" id="deletedModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h2>
            Are You Sure you Deleted{" "}
            <span className="text-red-500">{deleteModald.productname}</span>
          </h2>
          <h6>
            Place type{" "}
            <span className="font-semibold">{deleteModald.productname}</span>
          </h6>

          <input
            onChange={handleDeletedConfirm}
                id="delteidput"
            type="text"
            className="border-2 lg:w-full lg:h-12 px-2 border-gray-300 mt-4"
          />

          <div className="modal-action">
            <label
          
              disabled={deleteConfirm === false}
              onClick={() => handleDeleted(deleteModald._id)}
              className="btn bg-red-500 hover:bg-red-500 text-white "
            >
              Deleted
            </label>
            <label
              onClick={handleReset}
              htmlFor="deletedModal"
             className="btn bg-slate-400"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeletedModal;
