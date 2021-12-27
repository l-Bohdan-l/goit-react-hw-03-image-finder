import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';

export const Filter = ({ value, onChange }) => {
  return (
    <label className={styles.findLabel}>
      Find contacts by Name
      <input
        className={styles.findInput}
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};

Filter.defaultProps = {
  value: '',
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
