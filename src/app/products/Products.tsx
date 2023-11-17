import Product from './Product';

const arr = [1, 2, 3, 4, 5, 6, 7, 8];
const Products = () => {
  return (
    <div className="products">
      {arr.map(() => {
        return <Product />;
      })}
    </div>
  );
};

export default Products;
