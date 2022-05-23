import React, { useState } from "react";
import useProducts from "../../hooks/useProducts";
import { Icon } from "react-icons-kit";
import { plus } from "react-icons-kit/fa/plus";
import { minus } from "react-icons-kit/fa/minus";
const Inventory = () => {
    const [product] = useProducts();
    const [updatebtn, setUpdatebtn] = useState(false)
    
  return (
    <div className="w-[80%] my-12 mx-auto py-12 ">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-4">
        <div className="flex justify-center">
          <img
            className="w-96 border-2"
            src="https://i.ibb.co/82vcrwc/1-1.webp"
            alt=""
          />
        </div>
        <div>
          <h4 className="text-4xl mb-3">Lorem ipsum dolor sit amet.</h4>
          <img
            className="w-[100px]"
            src="https://i.ibb.co/6B0VPQz/four-golden-star-rating-illustration-260nw-1442679176-1.png"
            alt=""
          />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            provident sed, deserunt incidunt voluptas similique mollitia
            voluptatem ex officia adipisci reprehenderit error dicta cupiditate
            harum temporibus blanditiis pariatur a laudantium!
          </p>
          <h6 className="mt-2 font-semibold">IN STOCK: 2000000</h6>
          <h6 className=" mb-2 font-semibold">Minimum order: 1000</h6>
          <h6 className=" mb-2 font-semibold">Price Per Unit: $1000</h6>
          <span>
            <form>
              <div className="qunantity">
                <h6>
                 Order Quantity:{" "}
                  <span>
                    <label htmlFor="ide">
                      <Icon icon={minus} size={20}  />{" "}
                    </label>
                    <input className="border-2  border-gray-300 p-2 w-36 h-8 rounded-md mr-4" type="number" id="ide" />
                    <label htmlFor="ide">
                     
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
