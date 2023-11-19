import Product from './Product';
import Pagination from './Pagination';
import Loader from '../../ui/loader/Loader';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { TProduct } from './Product';
import { useFilter } from 'context/filterContext/FilterContext';
import NoProducts from './NoProducts';

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
  const [loading, setLoading] = useState<boolean>(false);

  const { filterOptions } = useFilter();

  const getProducts = async (page: number) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `http://jointshfrontendapi-env-3.eba-z7bd6rn6.eu-west-1.elasticbeanstalk.com/products`,
        {
          params: {
            limit: 8,
            page: page,
            promo: filterOptions.promo || undefined,
            active: filterOptions.active || undefined,
            search: filterOptions.searchInput || undefined,
          },
        },
      );

      setProductsMeta(response.data.meta);
      setProducts(response.data.items);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    getProducts(currentPage);
  }, [currentPage]);

  useEffect(() => {
    getProducts(1);
    setCurrentPage(1);
  }, [filterOptions]);

  return (
    <div className="products-page">
      <div className="products">
        {loading ? (
          <Loader />
        ) : products.length ? (
          products.map((product: TProduct) => {
            return <Product key={product.id} {...product} />;
          })
        ) : (
          <NoProducts />
        )}
      </div>
      {!loading && <Pagination {...productsMeta} setCurrentPage={setCurrentPage} currentPage={currentPage || 1} />}
    </div>
  );
};

export default Products;
