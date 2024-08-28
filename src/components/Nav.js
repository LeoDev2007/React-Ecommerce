import { IoCartSharp } from "react-icons/io5";
import styles from './Nav.module.css'
import { Link } from 'react-router-dom'



const Nav = () =>{


    return(
        <>
        
        <header>
            <div className={styles.menuContainer}>
                <div className={styles.Logo}>
                    <h1><span>E</span>-shop</h1>
                </div>
                <div className = {styles.menuDesktop}>
                    <ul>
                        <li><Link to = "/" className={styles.link}>Home</Link></li>
                        <li><Link to="/Product" className={styles.link}>Produtos</Link></li>
                        <li><Link to = "/Contact" className={styles.link}>Contato</Link></li>
                    </ul>
                </div>
                <div className={styles.buttons}>
                    <ul>
                        <li><Link to = '/'><button className={styles.btnLog}>LOGIN</button></Link></li>
                        <li><Link to = '/Cart' className={styles.linkCart}><IoCartSharp/></Link></li>
                    </ul>
                </div>
            </div>
        </header>
        
        </>
    )
}

export default Nav;
