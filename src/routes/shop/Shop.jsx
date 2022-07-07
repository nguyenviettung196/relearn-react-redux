import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './Shop.styles.scss';

import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';
import {  fetchCategoriesStart } from '../../store/categories/category.action';
import { useDispatch } from 'react-redux';

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=':category' element={<Category />} />
    </Routes>
  );
};

export default Shop;