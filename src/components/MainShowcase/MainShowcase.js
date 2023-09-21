import styles from './MainShowcase.module.scss';
import { oldPrice, newPrice } from '../../variables';
import { useState, useEffect } from 'react';
import trustpilot from '../../images/trustpilot.svg';

const MainShowcase = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = '2023-10-15';

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.timer}>
          <p className={styles.text}>Limited offer</p>
          <p className={styles.time}>
            {hours}:{minutes}:{seconds}
          </p>
        </div>
        <div className={styles.price}>
          <p className={styles.oldprice}>{oldPrice}</p>
          <p className={styles.newprice}>{newPrice}</p>
        </div>
      </div>
      <div className={styles.rating}>
        <p>Excellent 4.8/5</p>
        <img src={trustpilot} alt="trustpilot" />
        <a href="#rating">best selling</a>
      </div>
    </>
  );
};

export default MainShowcase;
