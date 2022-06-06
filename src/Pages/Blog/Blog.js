import React, { useState } from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import BlogDe from "./BlogDe";

const Blog = () => {
  const [blog, setBlog] = useState([]);

  fetch(`https://immense-plains-72444.herokuapp.com/blog`)
    .then((res) => res.json())
    .then((data) => setBlog(data));

  return (
    <>
      <div className="px-4 lg:px-12">
        <h1 className="text-4xl text-center pt-4"> Our Blog</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3  gap-8 my-12 ">
          {blog?.map((dt) => (
            <BlogDe key={dt._id} dt={dt}></BlogDe>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
