import React from "react";
import { Link } from "react-router-dom";

const BlogDe = ({ dt }) => {
  return (
    <div>
      <Link to={`/singleblog/${dt?._id}`}>
        <div className="border-2 shadow-md hover:scale-105 ease-in-out duration-300">
          <img className="lg:w-[400px] lg:h-[200px]" src={dt?.img} alt="" />
          <h1 className="text-xl p-4">{dt?.name.slice(0, 50)}</h1>
        </div>
      </Link>
    </div>
  );
};

export default BlogDe;
