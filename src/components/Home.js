import Slider from './Slider.js';
import CardSimple from './CardSimple.js';
import styles from './home.module.css';
import data from "./Data.js";
import Footer from './Footer.js';

import React from 'react';



const Home = () => {
    

     const fourProducts = data.productData.slice(0,4)

    return(
       <div className={styles.home}>
      
        <h2 style={{color: '#000', textAlign: 'center', fontSize: '40px', padding: '20px'}}>Promoções</h2>
        <Slider />
        <h2 style={{color: '#000', textAlign: 'center', fontSize: '30px', padding: '40px'}}>Melhores Ofertas</h2>
        <div className={styles.cardsContainer}>
         {fourProducts.map((item, index)=>{
            return(
                <CardSimple id={item.id} img={item.img} title={item.title} price = {item.price} parcel={item.parcel} desc = {item.desc} key = {index}   />
            )
         })}
        
        </div>
         <Footer />
         
       </div>
    )
}

export default Home