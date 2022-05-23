import React, { useEffect, useState } from 'react';

const useProducts = () => {
      const [product, setHandle] = useState([]);
  useEffect(() => {
    fetch("handeProduct.json")
      .then((res) => res.json())
      .then((data) => setHandle(data));
  }, []);
    return[product]
};

export default useProducts;