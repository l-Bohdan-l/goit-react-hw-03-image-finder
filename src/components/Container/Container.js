import PropTypes from 'prop-types';
import styles from './Container.module.scss';

export const Container = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

Container.defaultProps = {
  title: '',
  children: [],
};

Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
