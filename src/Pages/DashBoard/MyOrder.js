import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase,init";
import DeletedModal from "./DeletedModal";
import Loading from '../../Components/Loading/Loading'  

const MyOrder = ({paymentIntent}) => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [deleteModald, setDetedModal] = useState(null);
  const [products, setProducts ]= useState()

  const url = `https://immense-plains-72444.herokuapp.com/myorder?email=${email}`;
  

  useEffect(() => {
    fetch(url, {
      method: "GET",
      headers: {
        "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
      }
    })
      .then(res => res.json())
      .then(data => setProducts(data))
    
  }, [])
  console.log(products)
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Avatar</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total Price</th>
              <th>Payment</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
            {products?.reverse().map((pt, index) => (
              <tr key={pt._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={pt.img} />
                    </div>
                  </div>
                </td>
                <td>{pt.productname}</td>
                <td>{pt.quantity}</td>
                <td>${pt.price}</td>
                <td>${pt.totalPrice}</td>
                <td>
                  {!pt.paid ?
                    <Link to={`/dashboard/payment/${pt._id}`} >
                      <button  className="btn btn-success btn-outline btn-xs">
                      Payment
                    </button>

                    </Link> : <>
                      <span className="text-success font-bold">
                        PAID
                      </span>
                      <h6>{paymentIntent}</h6>
                    </>}
                </td>
                <td>
                  {!pt.paid&& <label for="deletedModal" onClick={()=>setDetedModal(pt)} className="btn btn-error btn-outline btn-xs modal-button"> Deleted</label>}
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {
        deleteModald && <DeletedModal setProducts={setProducts} products={products}   deleteModald={deleteModald} setDetedModal={setDetedModal}></DeletedModal>
      }
    </>
  );
};

export default MyOrder;
