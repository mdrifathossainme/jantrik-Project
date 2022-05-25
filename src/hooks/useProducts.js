import React, { useEffect, useState } from 'react';

const useProducts = () => {
  const [product, setHandle] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setHandle(data));
  }, []);
    return[product]
};

export default useProducts;