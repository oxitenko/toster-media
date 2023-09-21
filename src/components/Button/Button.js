import styles from './Button.module.scss';

const Button = () => {
  return (
    <div className={styles.container}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className={styles.button}
        href="https://www.youtube.com/"
      >
        buy now
      </a>
    </div>
  );
};

export default Button;
