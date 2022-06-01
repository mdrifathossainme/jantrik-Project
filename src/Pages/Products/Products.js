import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {

    const [products,setProducts] = useState([]);
    const [searchProduct, setSearchProducts] = useState([]);
    const [topRate,setTopRate]=useState(false)
    const [newArrival,setnewArrival]=useState(false)
    const [reatured,setFeatured]=useState(false)
    
    useEffect(() => {
    fetch("http://localhost:5000/products",{
      method: "GET",
      headers: {
         "authorization":`Bearer ${localStorage.getItem('asscessToken')}`
      }
    })
      .then((res) => res.json())
        .then((data) => {
            setSearchProducts(data)
            setProducts(data)
      });
  }, []);
    
    const hnaldeSeach = e => {
        const serchtext = e.target.value.toLowerCase()
        const search = products.filter(pt => pt.name.toLowerCase().includes(serchtext))
        setSearchProducts(search)
    
    }
    

    const handleToprateProduct = (e) => {
        const eheckBox =e.target.checked
       setTopRate(eheckBox)
    }
    const handleNewAvailave = (e) => {
        const eheckBox =e.target.checked
       setnewArrival(eheckBox)
    }
    const handleFuture = (e) => {
        const eheckBox =e.target.checked
       setFeatured(eheckBox)
    }
    console.log(topRate)

    return (
        <div className=''>
            <div className='grid lg:grid-cols-4 gap-x-8 gird-cols-1'>
                <div className='bg-yellow-100 lg:py-16  py-4 lg:h-[100vh] lg:col-span-1 sticky top-16 px-8   '>
                    <input type="text" placeholder="search" onChange={hnaldeSeach} class="input input-bordered input-primary  w-[100%] max-w-xs" />

                    <h4 className='mt-4 '>Category</h4>

                    <div className='grid grid-cols-3 md:grid-cols-1' >
                    <div class="form-control">
                    <label class="label cursor-pointer">
                     <span class="label-text font-semibold">Top Rated</span> 
                     <input onChange={handleToprateProduct } type="checkbox" name='topratebox'  class="checkbox checkbox-primary" />
                    </label>
                    </div>
                 

                     <div class="form-control">
                         <label class="label cursor-pointer">
                     <span class="label-text font-semibold">New Arrival</span> 
                     <input type="checkbox" onChange={handleNewAvailave}  class="checkbox checkbox-primary" />
                    </label>
                    </div>

                    <div class="form-control">
                    <label class="label cursor-pointer">
                     <span class="label-text font-semibold">Featured</span> 
                     <input onChange={handleFuture} type="checkbox"  class="checkbox checkbox-primary" />
                    </label>
                    </div>
                    </div>

                </div>
                

                <div className='lg:col-span-3 mt-12'>
                    <div className='grid md:grid-cols-3 grid-cols-1 gap-8'>
                        {
                            (topRate === true || newArrival=== true ||reatured === true  )? "" : <>
                            
                                {  searchProduct.reverse().map(product =>
                    <div className='border-2 p-4 rounded-md' key={product._id}>
                        <div className='flex justify-center'>
                            <img src={product.img} alt="" />
                            
                        </div>
                        <div>
                                 <img className='w-[100px] ' src={product.rimg} alt="" />
                            <h4 className='text-xl capitalize' >{product.name}</h4>
                            <h6 >Avilable Quantity quantity : {product.avilableQuantity}</h6>
                            <h6 >Minimum order quantity : {product.orderquantity}</h6>
                            <span className=''>
                                <h6 className='font-bold'>Price Per unit : ${product.price}</h6>
                            </span>
                        </div>
                        <div className='pt-4'>
                           <Link to={`/inventory/${product._id}`} > <button  className='btn btn-primary text-white w-full'>Book Now</button></Link>
                        </div>
                  </div> )  }</>
                            
                  
                } 
                        {topRate === true ? <>
                        { searchProduct.slice(6).reverse().map(product =>
                    <div className='border-2 p-4 rounded-md' key={product._id}>
                        <div className='flex justify-center'>
                            <img src={product.img} alt="" />
                            
                        </div>
                        <div>
                                 <img className='w-[100px] ' src={product.rimg} alt="" />
                            <h4 className='text-xl capitalize' >{product.name}</h4>
                            <h6 >Avilable Quantity quantity : {product.avilableQuantity}</h6>
                            <h6 >Minimum order quantity : {product.orderquantity}</h6>
                            <span className=''>
                                <h6 className='font-bold'>Price Per unit : ${product.price}</h6>
                            </span>
                        </div>
                        <div className='pt-4'>
                           <Link to={`/inventory/${product._id}`} > <button  className='btn btn-primary text-white w-full'>Book Now</button></Link>
                        </div>
                  </div> ) }
                        </> : ""
                
                } 
                        {newArrival === true ? <>
                        { searchProduct.slice(0,3).reverse().map(product =>
                    <div className='border-2 p-4 rounded-md' key={product._id}>
                        <div className='flex justify-center'>
                            <img src={product.img} alt="" />
                            
                        </div>
                        <div>
                                 <img className='w-[100px] ' src={product.rimg} alt="" />
                            <h4 className='text-xl capitalize' >{product.name}</h4>
                            <h6 >Avilable Quantity quantity : {product.avilableQuantity}</h6>
                            <h6 >Minimum order quantity : {product.orderquantity}</h6>
                            <span className=''>
                                <h6 className='font-bold'>Price Per unit : ${product.price}</h6>
                            </span>
                        </div>
                        <div className='pt-4'>
                           <Link to={`/inventory/${product._id}`} > <button  className='btn btn-primary text-white w-full'>Book Now</button></Link>
                        </div>
                  </div> ) }
                        </> : ""
                
                } 
                        {reatured === true ? <>
                        { searchProduct.slice(4,6).reverse().map(product =>
                    <div className='border-2 p-4 rounded-md' key={product._id}>
                        <div className='flex justify-center'>
                            <img src={product.img} alt="" />
                            
                        </div>
                        <div>
                                 <img className='w-[100px] ' src={product.rimg} alt="" />
                            <h4 className='text-xl capitalize' >{product.name}</h4>
                            <h6 >Avilable Quantity quantity : {product.avilableQuantity}</h6>
                            <h6 >Minimum order quantity : {product.orderquantity}</h6>
                            <span className=''>
                                <h6 className='font-bold'>Price Per unit : ${product.price}</h6>
                            </span>
                        </div>
                        <div className='pt-4'>
                           <Link to={`/inventory/${product._id}`} > <button  className='btn btn-primary text-white w-full'>Book Now</button></Link>
                        </div>
                  </div> ) }
                        </> : ""
                
                } 
        </div>
                 </div>
            </div>
           
        </div>
    );
};

export default Products;