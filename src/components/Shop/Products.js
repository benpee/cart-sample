import ProductItem from './ProductItem';
import classes from './Products.module.css';
const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever Wrote'
  },
  {
    id: 'p2',
    price: 12,
    title: 'My Second Book',
    description: 'The second book written by me'
  },
  {
    id: 'p',
    price: 9,
    title: 'My Third Book',
    description: 'Book number three written published by me'
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>{DUMMY_PRODUCTS.map(product =>
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
