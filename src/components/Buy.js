import { useParams } from 'react-router-dom'
import styles from './Buy.module.css'
import data from './Data.js'



const Buy = () =>{
    const {id} = useParams();
    console.log('ID da URL:', id);
    const itemId = parseInt(id, 10);
    console.log('ID convertido para número:', itemId);

    const item = data.productData.find(item => item.id === itemId)
    console.log('Produto encontrado:', item);

    if (!item) {
        return <p>Produto não encontrado</p>;
    }


    return(
        <div className={styles.buy}>
            
            <div className={styles.buyContainer}>
            <div className={styles.buyImg}><img src={item.img} alt={item.title}></img></div>
            <div className={styles.buyContent}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <p>{item.price}</p>
            </div>
        </div>
        
        </div>
    )
}

export default Buy