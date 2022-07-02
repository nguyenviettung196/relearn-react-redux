import React, { useContext } from 'react';
import './Shop.styles.scss';


import { ProductContext } from '../../contexts/products.context';
import ProductCard from '../../product-card/ProductCard';

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className='products-container'>
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Shop;