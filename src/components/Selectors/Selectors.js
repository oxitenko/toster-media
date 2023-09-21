import { useState } from 'react';
import styles from './Selectors.module.scss';

const Selectors = () => {
  const [isColorSelectorOpen, setIsColorSelectorOpen] = useState(false);
  const [isSizeSelectorOpen, setIsSizeSelectorOpen] = useState(false);
  const [colorSelector, setColorSelector] = useState('black');
  const [sizeSelector, setSizeSelector] = useState('2');

  const handleColorToggle = () => {
    setIsColorSelectorOpen(!isColorSelectorOpen);
  };

  const handleSizeToggle = () => {
    setIsSizeSelectorOpen(!isSizeSelectorOpen);
  };

  const handleColorSelectorChange = (key) => {
    switch (key) {
      case 'black':
        setColorSelector('black');
        break;

      case 'orange':
        setColorSelector('orange');
        break;

      case 'pink':
        setColorSelector('pink');
        break;

      case 'yellow':
        setColorSelector('yellow');
        break;

      default:
        setColorSelector('black');
    }
    handleColorToggle();
  };

  const handleSizeSelectorChange = (key) => {
    switch (key) {
      case '2':
        setSizeSelector('2');
        break;

      case '3':
        setSizeSelector('3');
        break;

      case '4':
        setSizeSelector('4');
        break;

      case '5':
        setSizeSelector('5');
        break;

      default:
        setSizeSelector('2');
    }
    handleSizeToggle();
  };

  return (
    <div className={styles.container}>
      <div className={styles.input}>
        <p className={styles.label}>color</p>
        <div className={styles.selector} onClick={handleColorToggle}>
          {colorSelector}
        </div>
        <ul
          className={
            isColorSelectorOpen
              ? `${styles.dropdown} ${styles.open}`
              : `${styles.dropdown}`
          }
        >
          <li onClick={() => handleColorSelectorChange('black')}>Black</li>
          <li onClick={() => handleColorSelectorChange('orange')}>Orange</li>
          <li onClick={() => handleColorSelectorChange('pink')}>Pink</li>
          <li onClick={() => handleColorSelectorChange('yellow')}>Yellow</li>
        </ul>
      </div>

      <div className={styles.input}>
        <p className={styles.label}>size</p>
        <div className={styles.selector} onClick={handleSizeToggle}>
          {sizeSelector}
        </div>
        <ul
          className={
            isSizeSelectorOpen
              ? `${styles.dropdown} ${styles.open}`
              : `${styles.dropdown}`
          }
        >
          <li onClick={() => handleSizeSelectorChange('2')}>2</li>
          <li onClick={() => handleSizeSelectorChange('3')}>3</li>
          <li onClick={() => handleSizeSelectorChange('4')}>4</li>
          <li onClick={() => handleSizeSelectorChange('5')}>5</li>
        </ul>
      </div>
    </div>
  );
};

export default Selectors;
