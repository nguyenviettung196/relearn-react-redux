import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/spinner/Spinner';
import ProductCard from '../../product-card/ProductCard';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import './Category.styles.scss';

const Category = () => {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <h2 className='category-title'>{category.toLocaleUpperCase()}</h2>
      {isLoading ? <Spinner /> : (
        <div className='category-container'>
          {products?.map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      )}
    </>
  );
};

export default Category;