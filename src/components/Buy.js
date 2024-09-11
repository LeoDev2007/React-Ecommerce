import { useParams } from 'react-router-dom'
import styles from './Buy.module.css'
import data from './Data.js'
import { useCart } from './CartContext';
import { IoStar } from "react-icons/io5";
import { IoStarHalf } from "react-icons/io5";



const Buy = () => {
    const { id } = useParams();
    console.log('ID da URL:', id);
    const itemId = parseInt(id, 10);
    console.log('ID convertido para número:', itemId);

    const item = data.productData.find(item => item.id === itemId)
    console.log('Produto encontrado:', item);

    const { addToCart } = useCart();

    if (!item) {
        return <p>Produto não encontrado</p>;
    }

    const handleAddToCart = () => {
        addToCart({ ...item, quantity: 1 });
      };


    return (
        <div className={styles.buy}>

            <div className={styles.buyContainer}>
                <div className={styles.buyImg}><img src={item.img} alt={item.title}></img></div>
                <div className={styles.buyContent}>
                    <h2>{item.title}</h2>
                    <div className={styles.rate}>
                        <p>{item.rate}</p>
                        <ul>

                            <li><IoStar /></li>
                            <li><IoStar /></li>
                            <li><IoStar /></li>
                            <li><IoStar /></li>
                            <li><IoStarHalf /></li>
                        </ul>
                    </div>
                    <p>{item.desc}</p>
                    <p>{item.price}</p>
                    <div className={styles.buyBtn}>
                        <button>Comprar</button>
                        <button onClick={handleAddToCart}>Adicionar ao carrinho</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Buy