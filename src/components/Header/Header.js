import styles from './Header.module.scss';
import ReactCountryFlag from 'react-country-flag';
import logo from '../../images/logo.svg';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.offer}>
        <p className={styles.text}>
          <ReactCountryFlag
            countryCode="ZA"
            svg
            style={{ width: '0.8em', height: '0.8em', marginRight: '2px' }}
          />
          SPECIAL OFFER + FREE DELIVERY 2-4 DAYS IN SA
          <ReactCountryFlag
            countryCode="ZA"
            svg
            style={{ width: '0.8em', height: '0.8em', marginLeft: '2px' }}
          />
        </p>
      </div>
      <div className={styles.logo}>
        <a href="#page">
          <img src={logo} alt="logo" />
        </a>
      </div>
    </header>
  );
};

export default Header;
