import React from 'react';
import { ContactListItem } from './ContactListItem';
import PropTypes from 'prop-types';
import styles from './ContactList.module.scss';

export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <li className={styles.item} key={contact.id}>
          <ContactListItem {...contact} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

ContactsList.defaultProps = {
  contacts: [],
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
  onDelete: PropTypes.func.isRequired,
};
