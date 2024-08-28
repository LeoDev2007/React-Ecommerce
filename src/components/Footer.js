import { SlSocialInstagram } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialYoutube } from "react-icons/sl";
import styles from "./Footer.module.css"
import { Link } from "react-router-dom";


const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={styles.footerBody}>
                <ul>
                    <li><Link to = "/" className={styles.li} >Home</Link></li>
                    <li><Link to = "/Product" className={styles.li} >Produtos</Link></li>
                    <li><Link to = "/Contact" className={styles.li}>Contato</Link></li>
                </ul>
                <h2>E-shop</h2>
                <div className={styles.socialIcons}>
                    <a href="/"><SlSocialInstagram /></a>
                    <a href="/"><SlSocialTwitter /></a>
                    <a href="/"><SlSocialYoutube /></a>
                </div>
                <p>Todos os direitos reservados @2024</p>
            </div>
        </footer>
    )
}

export default Footer