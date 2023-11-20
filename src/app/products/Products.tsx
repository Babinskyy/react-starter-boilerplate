import Product from './Product';
import Pagination from './Pagination';
import Loader from '../../ui/loader/Loader';
import { useEffect, useState } from 'react';
import { TProduct } from './Product';
import { useFilter } from 'context/filterContext/FilterContext';
import NoProducts from './NoProducts';
import { useQuery } from 'hooks';

export type TProductsMeta = {
  currentPage: number;
  itemCount: number;
  itemsPerPage: number;
  totalItems: number;
  totalPages: number;
};

const Products = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<TProduct[]>([]);
  const [productsMeta, setProductsMeta] = useState<TProductsMeta | undefined>(undefined);

  const { filterOptions } = useFilter();

  const { data: productsResponse, isLoading: areProductsLoading } = useQuery(
    'getProducts',
    {
      limit: window.innerWidth < 768 ? 4 : 8,
      page: currentPage,
      promo: filterOptions.promo || undefined,
      active: filterOptions.active || undefined,
      search: filterOptions.searchInput || undefined,
    },
    {
      select: (data) => {
        return { ...data };
      },
    },
  );

  useEffect(() => {
    if (!areProductsLoading) {
      setProductsMeta(productsResponse?.meta || undefined);
      setProducts(productsResponse?.items || []);
    }
  }, [areProductsLoading, productsResponse]);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterOptions]);

  return (
    <div className="products-page">
      <div className={`products ${products.length === 2 || products.length === 6 ? 'change-display' : ''}`}>
        {areProductsLoading ? (
          <Loader />
        ) : products.length ? (
          products.map((product: TProduct, index: number) => <Product key={product.id} {...product} />)
        ) : (
          <NoProducts />
        )}
      </div>

      <Pagination
        {...productsMeta}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        areProductsLoading={areProductsLoading}
      />
    </div>
  );
};

export default Products;
