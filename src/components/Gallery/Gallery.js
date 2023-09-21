import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Gallery.module.scss';
import black from '../../images/black.png';
import orange from '../../images/orange.png';
import pink from '../../images/pink.png';
import yellow from '../../images/yellow.png';

const Gallery = () => {
  const defaultImage = black;
  const [selectedImage, setSelectedImage] = useState(defaultImage);
  const [isSelected, setIsSelected] = useState(0);

  const handleImageClick = (newImage, index) => {
    setSelectedImage(newImage);
    setIsSelected(index);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>Orthopedic Slippers</h2>
      <ul className={styles.gallery}>
        <AnimatePresence>
          <motion.li
            key="selected"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <motion.img
              src={selectedImage}
              alt="selected"
              key={selectedImage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </motion.li>
        </AnimatePresence>
        <li>
          <img
            className={isSelected === 0 ? styles.selected : ''}
            src={black}
            alt="black"
            onClick={() => handleImageClick(black, 0)}
          />
        </li>
        <li>
          <img
            className={isSelected === 1 ? styles.selected : ''}
            src={orange}
            alt="orange"
            onClick={() => handleImageClick(orange, 1)}
          />
        </li>
        <li>
          <img
            className={isSelected === 2 ? styles.selected : ''}
            src={pink}
            alt="pink"
            onClick={() => handleImageClick(pink, 2)}
          />
        </li>
        <li>
          <img
            className={isSelected === 3 ? styles.selected : ''}
            src={yellow}
            alt="yellow"
            onClick={() => handleImageClick(yellow, 3)}
          />
        </li>
      </ul>
    </div>
  );
};

export default Gallery;
