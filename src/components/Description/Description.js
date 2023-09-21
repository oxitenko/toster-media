import styles from './Description.module.scss';
import ReactCountryFlag from 'react-country-flag';
import stars from '../../images/stars.svg';

const Description = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>
        <span>Fast Delivery: </span> 2-4 days from SA
        <ReactCountryFlag
          countryCode="ZA"
          svg
          style={{ width: '0.8em', height: '0.8em', marginLeft: '2px' }}
        />
      </p>
      <p className={styles.text}>
        <span>In Stock: </span> Shipping from Johannesburg
        <ReactCountryFlag
          countryCode="ZA"
          svg
          style={{ width: '0.8em', height: '0.8em', marginLeft: '2px' }}
        />
      </p>
      <p className={styles.text}>
        <img src={stars} alt="stars" /> (10)
      </p>
    </div>
  );
};

export default Description;
