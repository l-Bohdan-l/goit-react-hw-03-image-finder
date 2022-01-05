import styles from './Button.module.scss';

export const Button = ({ onClick }) => {
  return (
    <button className={styles.button} type="button" onClick={onClick}>
      Load more
    </button>
  );
};
