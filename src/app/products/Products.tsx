import Product from './Product';
import Pagination from './Pagination';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { TProduct } from './Product';
import { useFilter } from 'context/filterContext/FilterContext';

export type TProductsMeta = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

const Products = () => {
  const [products, setProducts] = useState<TProduct[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [productsMeta, setProductsMeta] = useState<TProductsMeta>();

  const { filterOptions } = useFilter();

  const getProducts = async (page: number) => {
    try {
      const response = await axios.get(
        `http://jointshfrontendapi-env-3.eba-z7bd6rn6.eu-west-1.elasticbeanstalk.com/products?limit=${8}&page=${page}`,
        {
          params: {
            promo: filterOptions.promo || undefined,
            active: filterOptions.active || undefined,
          },
        },
      );

      setProductsMeta(response.data.meta);
      setProducts(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getProducts(1);
  }, [filterOptions]);

  return (
    <div className="products-page">
      <div className="products">
        {products.map((product: TProduct) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
      <Pagination {...productsMeta} handlePageChange={handlePageChange} />
    </div>
  );
};

export default Products;
