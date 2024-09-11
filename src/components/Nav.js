import { IoCartSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuMobile = () => {
    setMenuOpen(menuOpen => !menuOpen);
  };

  return (
    <>
      <header>
        <div className={styles.menuContainer}>
          <div className={styles.Logo}>
            <h1>
              <span>E</span>-shop
            </h1>
          </div>
          <button className={styles.menuToggle} onClick={menuMobile}>
            {menuOpen ? <IoClose /> : <IoMenu />}
          </button>
          <div className={styles.menuDesktop}>
            <ul>
              <li>
                <Link to="/" className={styles.link}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/Product" className={styles.link}>
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/Contact" className={styles.link}>
                  Contato
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.buttons}>
            <ul>
              <li>
                <Link to="/">
                  <button className={styles.btnLog}>LOGIN</button>
                </Link>
              </li>
              <li>
                <Link to="/Cart" className={styles.linkCart}>
                  <IoCartSharp />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`${styles.menuMobile} ${menuOpen ? styles.menuMobileOpen : ''}`}>
          <ul>
            <li><Link to="/" className={styles.link} onClick={menuMobile}>Home</Link></li>
            <li><Link to="/Product" className={styles.link} onClick={menuMobile}>Produtos</Link></li>
            <li><Link to="/Contact" className={styles.link} onClick={menuMobile}>Contato</Link></li>
            <li><Link to='/'><button className={styles.btnLog} onClick={menuMobile}>LOGIN</button></Link></li>
            <li><Link to='/Cart' className={styles.linkCart} onClick={menuMobile}><IoCartSharp /></Link></li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Nav;
