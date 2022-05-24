import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Components/Loading/Loading'
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