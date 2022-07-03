import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../product-card/ProductCard';
import './CategoryPreview.styles.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className='category-preview-container'>
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>
        {
          // '_' meaning don't want to use first argument
          products.filter((_, idx) => idx < 4).map((product) => (<ProductCard product={product} key={product.id} />))
        }
      </div>
    </div>
  );
};

export default CategoryPreview;