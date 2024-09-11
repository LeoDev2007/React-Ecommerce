import React from 'react';
//import Detail from "./Detail.js";
import CardSimple2 from './CardSimple2.js';
import styles from './CatPro.module.css';
import data from './Data.js'

const CatPro = ({ products, setProducts }) => {

    const eightProducts = data.productData.slice(4, 12)

    const filterProducts = (categoria) => {
        const update = eightProducts.filter((product) => product.Cat === categoria)
        setProducts(update);
    }

    const resetProducts = () => {
        setProducts(eightProducts);
    }




    return (
        <div className={styles.products}>
            <div className={styles.container}>
                <div className={styles.filtro}>
                    <div className={styles.categorias}>
                        <h3>Categorias</h3>
                        <ul>
                            <li onClick={resetProducts}>Todos os Produtos</li>
                            <li onClick={() => filterProducts("Celular")}>Celulares</li>
                            <li onClick={() => filterProducts("Tablet")}>Tablets</li>
                            <li onClick={() => filterProducts("Notebook")}>Notebooks</li>
                            <li onClick={() => filterProducts("Fone")}>Fones de Ouvido</li>
                            <li onClick={() => filterProducts("Microfone")}>Microfones</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.productBox}>
                    <h2><span>Top Produtos</span></h2>
                    <div className={styles.content}>
                        {products.map((item, index) => (
                            <CardSimple2 id={item.id} img={item.img} title={item.title} price={item.price} parcel={item.parcel} desc={item.desc} key={index} />
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
}

export default CatPro;