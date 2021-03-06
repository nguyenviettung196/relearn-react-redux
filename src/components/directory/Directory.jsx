import React from 'react';
import DirectoryItem from '../directory-item/DirectoryItem';
import './Directory.styles.scss';

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem category={category} key={category.id} />
      ))}
    </div>
  );
};

export default Directory;