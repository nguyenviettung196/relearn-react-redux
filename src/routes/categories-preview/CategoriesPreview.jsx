import React, { useContext } from 'react';
import CategoryPreview from '../../components/category-preview/CategoryPreview';
import { CategoriesContext } from '../../contexts/categories.context';
import './CategoriesPreview.styles.scss';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
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