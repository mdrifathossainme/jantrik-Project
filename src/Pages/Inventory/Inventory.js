import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase,init";
import {  toast } from 'react-toastify';
import { useQuery } from "react-query";
import Loading from '../../Components/Loading/Loading'
const Inventory = () => {
   const [user] = useAuthState(auth);

  const { id } = useParams()
  // const [item, setItem] = useState()
  const [toggleQuntity,setToggleQunatity]=useState(false)
 
 
  

  const url = `http://localhost:5000/products/${id}`
  

  const { data: item, isLoading, refetch } = useQuery('singleProduct',()=> fetch(url).then(res => res.json()))
  


 const [newaQuantity, setnewaQuantity] = useState(
   { quantity:item?.orderquantity}
  )



  if (isLoading) {
  return <Loading/>
}
 
 
  const handleQuanty = (e) => {
   
    const { quantity, ...rest } = newaQuantity
    const newQunaty = e.target.value
    const newitem = { quantity: newQunaty, ...rest }
    setnewaQuantity(newitem)
    setToggleQunatity(true)
    
  }
  
  const quantity = newaQuantity.quantity || item?.orderquantity
  
  const order = {
    username: user.displayName,
    email: user.email,
    productname: item?.name,
    quantity:quantity,
    price:item?.price,
    totalPrice: item?.price*quantity,
    img:item?.img
    
  }
  const remainQantity = item?.avilableQuantity - quantity
          
          const putItme = {
            avilableQuantity:remainQantity
          }


    console.log(putItme)



  const handleSubmit = (e) => {



    e.preventDefault()
     if (item?.orderquantity > newaQuantity.quantity) {
     toast.error(`Minimum order quantity:${item?.orderquantity}`)
    setnewaQuantity({ quantity: item?.orderquantity }) 
  }
  else if (item?.avilableQuantity <= newaQuantity.quantity) {
    toast.error(`Maximum order quantity:${item?.avilableQuantity}`)

       setnewaQuantity({ quantity: item?.avilableQuantity }) 
  }
  else {
    
    fetch('http://localhost:5000/order', {
      method: "POST",
      headers: {
        "content-type": "application/json",
        "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
      },
      body:JSON.stringify(order)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          toast.success('Your order has been completed')

         
   
       const url=`http://localhost:5000/product/${item?._id}`
       
        fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
        "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
      },
      body:JSON.stringify(putItme)
        })
         .then(res => res.json())
          .then(data => {
            console.log(data)
            refetch()
       })



        }
        if (data.success === false) {
          toast.error('You have already ordered this product')
          
        }
      })
       
     
       

    }
    
  }

  return (
    <div className="w-[80%] my-12 mx-auto py-12 ">
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-4 lg:gap-x-0 gap-y-4">
        <div className="flex justify-center">
          <img
            className="w-96 border-2"
            src={item?.img}
            alt=""
          />
        </div>
        <div>
          <h4 className="text-4xl mb-3">{item?.name}</h4>
          <img
            className="w-[100px]"
            src={item?.rimg}
            alt=""
          />
          <p>
            {item?.description}
          </p>
          <h6 className="mt-2 font-semibold">IN STOCK: { item?.avilableQuantity}</h6>
          <h6 className=" mb-2 font-semibold">Minimum order: { item?.orderquantity}</h6>
          <h6 className=" mb-2 font-semibold">Price Per Unit: ${item?.price }</h6>
          <span>
            <form onSubmit={handleSubmit}>
              <div className="qunantity">
                <h6>
                 Order Quantity:
                  <span>
                 
                    <input className="border-2 ml-2 name  border-gray-300 p-2 w-36 h-8 rounded-md mr-4" onChange={handleQuanty} value={toggleQuntity===false? item?.orderquantity: newaQuantity.quantity} type="number" id="ide" />
                  </span>
                </h6>
                
                  <div className="quantity-form">
                      
                 <div>
               
                 </div>
                </div>
              </div>
              <button
                type="submit "
                className="btn btn-primary text-white w-[160px] mt-4"
              >
                Order
              </button>
            </form>
          </span>
        </div>
          </div>
            
    </div>
  );
};

export default Inventory;
