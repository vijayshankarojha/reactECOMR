import axios from './axios';
import React, { createContext, useEffect, useState } from 'react';


export const ProductContext = createContext();


const Context = (props) => {
  const [products, setProducts] = useState(() => {
    try {
      const savedProducts = localStorage.getItem("products");
      return savedProducts ? JSON.parse(savedProducts) : [];
    } catch (error) {
      console.error( error);
      
      
      
      return [];
    }
    
  });
  
  
  

  useEffect(() => {
    try {
      localStorage.setItem("products", JSON.stringify(products));
    } catch (error) {
      console.error("Error saving products to localStorage:", error);
    }
  }, [products]);
  
  

  useEffect(() => {
    if (!products || products.length === 0) {
      axios.get('/products')
        .then(response => {
          setProducts(response.data);
        })
        .catch(error => {
          console.error("Failed to fetch products from API:", error);
        });
    }
    
  }, []);

  return (
    <ProductContext.Provider value={[products, setProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default Context;
