import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

import Card from '../UI/Card';
import classes from './ProductItem.module.css';


const ProductItem = (props) => {
  const { title, price, description, id } = props;

  // const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    // const newTotalQuantity = cart.totalQuantity + 1;

    // const updatedItems = cart.items.slice(); // create copy via slice to avoid mutation
    // const existingItem = updatedItems.find(item => item.id === id);

    // if (existingItem) {
    //   const updatedItem = { ...existingItem }; // new object + copy exisiting property
    //   updatedItem.quantity++;
    //   updatedItem.price = updatedItem.price + price;
    //   const existingItemIndex = updatedItems.findIndex(item => item.id === id);
    //   updatedItems[existingItemIndex] = updatedItem
    // } else {
    //   updatedItems.push({
    //     id,
    //     title,
    //     price,
    //     quantity: 1,
    //     name: title
    //   })
    // }

    // const newCart = {
    //   item: updatedItems,
    //   totalQuantity: newTotalQuantity,
    // }

    // dispatch(cartActions.replaceCart(newCart))

    // and then send HTTP request
    fetch('firebase-url', {
      method: 'POST',
      body: JSON.stringify(newCart)
    })

    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
      description
    }));
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
