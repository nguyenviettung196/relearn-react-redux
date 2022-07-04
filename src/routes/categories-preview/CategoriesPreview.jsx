import React from 'react';
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { selectCategoriesMap } from '../../store/categories/category.selector';

import './CategoriesPreview.styles.scss';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  return (
    <div className='category-preview-container'>
      {
        console.log(Object.keys(categoriesMap))
      }
      { // calling *Object.keys* return an array of obj's keys,then .map() through each array
        Object.keys(categoriesMap).map(title => {
          const products = categoriesMap[title];
          return <CategoryPreview key={title} title={title} products={products} />;
        }
        )
      }
    </div>
  );
};

export default CategoriesPreview;