import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import auth from "../../firebase,init";
import DeletedModal from "./DeletedModal";
import Loading from '../../Components/Loading/Loading'  

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;
  const [deleteModald, setDetedModal] = useState(null);

const url = `http://localhost:5000/myorder?email=${email}`;
  
const {data:products , isLoading, refetch}=useQuery('user',()=> fetch( url,{
    method:'GET'
}).then(res=>res.json()))


  if (isLoading) {
      <Loading/>
  }
  
  return (
    <>
      <div class="overflow-x-auto">
        <table class="table w-full">
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
                  <div class="avatar">
                    <div class="w-16 rounded">
                      <img src={pt.img} />
                    </div>
                  </div>
                </td>
                <td>{pt.productname}</td>
                <td>{pt.quantity}</td>
                <td>${pt.price}</td>
                <td>${pt.totalPrice}</td>
                <td>
                  <Link to="/dashboard/payment">
                    <button  className="btn btn-success btn-outline btn-xs">
                      Payment
                    </button>
                  </Link>
                </td>
                <td>
                  <label for="deletedModal" onClick={()=>setDetedModal(pt)} class="btn btn-error btn-outline btn-xs modal-button"> Deleted</label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {
        deleteModald && <DeletedModal refetch={refetch}  deleteModald={deleteModald} setDetedModal={setDetedModal}></DeletedModal>
      }
    </>
  );
};

export default MyOrder;
