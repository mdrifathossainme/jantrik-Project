import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProducts = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgApiKey = "2e23ea39c13302f51994cfeea7fa6d4b";

  const onSubmit = (data) => {
      const image = data.img[0];

      const formData = new FormData();
      formData.append("image", image);
      const url = `https://api.imgbb.com/1/upload?key=${imgApiKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          const upimg = result.data.url;

          const name = data.name;
          const orderquantity = data.orderquantity;
          const avilableQuantity = data.avilableQuantity;
          const price = data.price;
          const description = data.description;
          const img = upimg;

          const product = {
            name,
            orderquantity,
            avilableQuantity,
            price,
            description,
            img,
          };
          fetch("https://immense-plains-72444.herokuapp.com/addproduct", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success("Product Add Success");
                reset();
              }
            });
        });
    
  };

  return (
    <div>
      <h1 className="text-3xl mb-8 text-center mt-8 lg:mt-4">Add Products</h1>
      <div className="">
        <form
          className="lg:w-[50%] w-[80%] mx-auto p-8 border-2 border-gray-300 mb-8 rounded-md "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-control mb-4">
            <input
              type="text"
              placeholder="Product Name"
              className="input input-bordered"
              {...register("name", {
                required: {
                  value: true,
                },
              })}
            />
          </div>
          <div className="form-control mb-4">
            <input
              type="number"
              placeholder="Order Quantity"
              className="input input-bordered"
              {...register("orderquantity", {
                required: {
                  value: true,
                },
              })}
            />
          </div>
          <div className="form-control mb-4">
            <input
              type="number"
              placeholder="Avilable Quantity"
              className="input input-bordered"
              {...register("avilableQuantity", {
                required: {
                  value: true,
                },
              })}
            />
          </div>
          <div className="form-control mb-4">
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered"
              {...register("price", {
                required: {
                  value: true,
                },
              })}
              name="price"
            />
          </div>
          <div className="form-control mb-4">
            <textarea
              type="text"
              {...register("description", {
                required: {
                  value: true,
                },
              })}
              placeholder="Description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mb-4">
            <input
              {...register("img", {
                required: {
                  value: true,
                },
              })}
              type="file"
            />
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
