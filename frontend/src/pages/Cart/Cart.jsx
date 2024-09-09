import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext)

  const navigate = useNavigate();
  return (
  
    <div className='cart'>
      <div className="cart-iteams">
        <div className="cart-items-title">
          <p>Item</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              <div>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt='' />
                  <p>{item.name}</p>
                  <p>R{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>R{item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
         <div className="cart-total">
          <h2>Cart Totals</h2>
        <div>
    
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>R{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>R{getTotalCartAmount()===0?0:40}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <b>Total</b>
          <b>R{getTotalCartAmount()===0?0:getTotalCartAmount()+40}</b>
        </div>
      </div>
      <button onClick={()=>navigate('/shopping-cart/placeOder')}>CHECKOUT</button>
      </div>
      <div className="cart-promocode">
        <div>
          <p>Promo code</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder='Enter promo code (optional)' />
            <button>Submit</button>
          </div>
          </div>
          </div>
        </div>
      </div>
  
  );
}

export default Cart;
