import Carousel from 'react-bootstrap/Carousel';
import android from '../images/android.jpg'
import styles from './Slider.module.css'

function Slider() {
  return (
    <Carousel>
      <Carousel.Item style={{background: '#00000080',}}>
       <img
       className={styles.image}
        src = {android}
        alt = 'First'
        
        />
        <Carousel.Caption style={{background: '#00000080'}}>
          <h3>Promoção Galaxy S23</h3>
          <p>50% de desconto sem juros</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        className={styles.image}
            src = {android}
            alt = 'First'
            />
        <Carousel.Caption style={{background: '#00000080'}}>
          <h3>Promoção Galaxy S23</h3>
          <p>50% de desconto sem juros</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
       className={styles.image}
        src = {android}
        alt = 'First'
        />
        <Carousel.Caption style={{background: '#00000080'}}>
          <h3>Promoção Galaxy S23</h3>
          <p>
            50% de desconto sem juros.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;