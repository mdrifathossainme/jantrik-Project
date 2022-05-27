import React from 'react';
import { Link } from 'react-router-dom';
import useProducts from '../../hooks/useProducts';

const Featured = () => {
    const [product] = useProducts()

    return (
         <div className='grid md:grid-cols-2  grid-cols-1 gap-8'>
               {
                product.slice(0,3).map(product =>
                    <div className='border-2 p-4 rounded-md' key={product._id}>
                        <div className='flex justify-center'>
                            <img src={product.img} alt="" />
                            
                        </div>
                        <div>
                                 <img className='w-[100px] ' src={product.rimg} alt="" />
                            <h4 className='text-2xl' >{product.name}</h4>
                            <h6 >Avilable Quantity quantity : {product.avilableQuantity}</h6>
                            <h6 >Minimum order quantity : {product.orderquantity}</h6>
                            <span className=''>
                                <h6 className='font-bold'>Price Per unit : ${product.price}</h6>
                            </span>
                        </div>
                        <div className='pt-4'>
                           <Link to={`/inventory/${product._id}`} > <button  className='btn btn-primary text-white w-full'>Book Now</button></Link>
                        </div>
                  </div> )  
                } 
        </div>
    );
};

export default Featured;