import React, { useEffect, useState } from "react";
import useProducts from "../../hooks/useProducts";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/fa/plus";
import { minus } from "react-icons-kit/fa/minus";
import { useParams } from "react-router-dom";
const Inventory = () => {
  const { id } = useParams()
  const [item, setItem] = useState()
  
  useEffect(() => {
    fetch(`https://immense-plains-72444.herokuapp.com/products/${id}`)
      .then(res => res.json())
    .then(data=>setItem(data))
  },[item])
   console.log(item)
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
            <form>
              <div className="qunantity">
                <h6>
                 Order Quantity:{" "}
                  <span>
                    <label htmlhtmlFor="ide">
                      <Icon icon={minus} size={20}  />{" "}
                    </label>
                    <input className="border-2  border-gray-300 p-2 w-36 h-8 rounded-md mr-4" type="number" id="ide" />
                    <label htmlhtmlFor="ide">
                     
                      <Icon size={20} icon={plus} />
                    </label>
                  </span>
                </h6>
                
                  <div className="quantity-form">
                      
                    {/* <form className="my-4 flex items-center ">
                      <input className="border-2  border-gray-300 p-2 w-36 h-8 rounded-md mr-4 " type="number" name="number" />
                      <label>
                        <input className="btn btn-success btn-outline btn-sm" type="submit" value="Update" />
                      </label>
                    </form> */}
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
