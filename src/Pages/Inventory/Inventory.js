import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase,init";
const Inventory = () => {
   const [user] = useAuthState(auth);

  const { id } = useParams()
  const [item, setItem] = useState()

  const [newaQuantity, setnewaQuantity] = useState(
   { quantity:2346}
  )
  


  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then(res => res.json())
    .then(data=>setItem(data))
  }, [])
  
  const handleQuanty = (e) => {
    console.log(e.target.value)
    const { quantity, ...rest } = newaQuantity
    const newQunaty = e.target.value
    const newitem = { quantity: newQunaty, ...rest }
    setnewaQuantity(newitem)
    
  }
     if (item?.orderquantity > newaQuantity.quantity) {
     alert('Minimum order quantity: 2346')
    setnewaQuantity({ quantity: 2346 }) 
  }
  else if (item?.avilableQuantity < newaQuantity.quantity) {
    alert('Maximum order quantity: 542487')

       setnewaQuantity({ quantity: 542487 }) 
  }

 





  
  const handleSubmit = (e) => {
    e.preventDefault()
     if (item?.orderquantity > newaQuantity.quantity) {
     alert('Minimum order quantity: 2346')
    setnewaQuantity({ quantity: 2346 }) 
  }
  else if (item?.avilableQuantity < newaQuantity.quantity) {
    alert('Maximum order quantity: 542487')

       setnewaQuantity({ quantity: 542487 }) 
  }
  else {
    
    fetch('http://localhost:5000/order', {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body:JSON.stringify()
    })
      .then(res => res.json())
      .then(data => {
      console.log(data)
    })

  }
  }

  return (
    <div className="w-[80%] my-12 mx-auto py-12 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4">
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
                 
                    <input className="border-2 ml-2  border-gray-300 p-2 w-36 h-8 rounded-md mr-4" onChange={handleQuanty} value={newaQuantity.quantity} type="number" id="ide" />
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
