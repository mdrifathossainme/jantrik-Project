import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Components/Loading/Loading";
import ProductModal from "./ProductModal";



const  ManageProducts = () => {
    const url='https://immense-plains-72444.herokuapp.com/products'
    const { data, isLoading, refetch } = useQuery('allorder', () => fetch(url,{
      method: "GET",
      headers: {
         "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
      }
    }).then(res => res.json()))
    const [allProductsModal,setAllProductsModal]=useState(null)
    
    if (isLoading) {
      return <Loading/>
  }

  return (
      <>
          <h1 className="text-4xl">All Product</h1>
      <div className="overflow-x-auto lg:py-12">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>img</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Deleted</th>
            </tr>
          </thead>
          <tbody>
            {data?.reverse().map((dt, index) => (
              <tr key={dt._id}>
                <th>{index + 1}</th>
                <td>
                   <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={dt.img} />
                    </div>
                  </div>
                </td>
                <td>{dt.name}</td>
                <td>{dt.avilableQuantity}</td>
                <td>${dt.price}</td>
                   <td>
                  <label onClick={() => setAllProductsModal(dt)} for="AllProducts" className="btn modal-button btn-xs btn-error ">Delete</label>
                </td>              
                <td>
                 
                </td>
                <td>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    {allProductsModal&&<ProductModal refetch={refetch} setAllProductsModal={setAllProductsModal} allProductsModal={allProductsModal}></ProductModal>}
    </>
  );
};

export default  ManageProducts;
