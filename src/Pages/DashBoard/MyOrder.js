import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase,init";

const MyOrder = () => {
  const [user] = useAuthState(auth);
  const email = user?.email;

  const [products, setProduct] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/myorder?email=${email}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => setProduct(data));
      
  }, []);
  console.log(products);

  return (
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
                  {products.reverse().map((pt ,index) =>
                      <tr key={pt._id}>
            <th>{ index+1}</th>
            <td><div class="avatar">
  <div class="w-16 rounded">
    <img src={pt.img} />
  </div>
</div></td>
                          <td>{ pt.productname}</td>
                          <td>{ pt.quantity}</td>
                          <td>${ pt.price}</td>
                          <td>${ pt.totalPrice}</td>
                          <td><Link to="/dashboard/payment"><button className="btn btn-success btn-outline btn-xs">Payment</button></Link></td>
                          <td><Link to="/dashboard/payment"><button className="btn btn-error btn-outline btn-xs">Deleted</button></Link></td>
        
          </tr>)}
        </tbody>
      </table>
    </div>
  );
};

export default MyOrder;
