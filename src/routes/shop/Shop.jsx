import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Shop.styles.scss';


import { CategoriesContext } from '../../contexts/categories.context';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;