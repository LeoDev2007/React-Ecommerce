import React, { useState } from "react";
import styles from './product.module.css';
import Search from "./Search";
import CatPro from '../components/CatPro';
import Footer from "./Footer";
import data from "./Data.js";

const Product = () => {
  
  const initialProducts = data.productData.slice(4, 12);

  
  const [products, setProducts] = useState(initialProducts);

  
  const searchbtn = (searchQuery) => {
  
    const terms = searchQuery.toLowerCase().split(/\s+/).filter(term => term.length > 0);


    const filteredProducts = initialProducts.filter(product => {

      return terms.every(term =>{
        if (Array.isArray(product.searchTerms)) {
          return product.searchTerms.some(searchTerm => searchTerm.toLowerCase().includes(term));
        }
        
        return false;
      })
    });

   
    setProducts(filteredProducts);
  };

  return (
    <div className={styles.productContainer}>
      <Search searchbtn={searchbtn} />
      <span><h2>Produtos</h2></span>
      <p>Home . Produtos</p>
      <CatPro products={products} setProducts={setProducts} />
      <Footer />
    </div>
  );
}

export default Product;
