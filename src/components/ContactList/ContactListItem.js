import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactListItem.module.scss';

export const ContactListItem = ({ name, number, id, onDelete }) => {
  return (
    <>
      <span>
        {name} : {number}
      </span>
      <button
        className={styles.button}
        type="button"
        onClick={() => onDelete(id)}
      >
        x
      </button>
    </>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
