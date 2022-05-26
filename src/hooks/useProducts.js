import React, { useEffect, useState } from 'react';

const useProducts = () => {
  const [product, setHandle] = useState([]);
  
  useEffect(() => {
    fetch("https://immense-plains-72444.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setHandle(data));
  }, []);
    return[product]
};

export default useProducts;