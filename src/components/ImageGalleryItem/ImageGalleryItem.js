import React from 'react';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ link, name }) => {
  return <img src={link} alt={name} />;
};
