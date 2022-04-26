import React from "react";
import { motion } from "framer-motion"


function Cart({ cart, setCart, calculTotal }) {
  return (
    <div className="cart">
      <p>{console.log(cart)}</p>
      {cart.length === 0 ? (
        <p>mon panier est vide</p>
      ) : (
        <motion.button style={{ cursor: "pointer" }} whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }} className="btn-validate">Valider mon panier</motion.button>
      )}

      {cart.map((item) => {
        return (
          <div className="selected-meal">
            <span className="number-name">
              <button
className="buttonCart"
                onClick={() => {
                  if (item.quantity === 1) {
                    const newCart = [...cart];
                    const index = newCart.indexOf(item);
                    console.log(index);

                    newCart.splice(index, 1);

                    setCart(newCart);
                  } else {
                    const newCart = [...cart];
                    item.quantity--;
                    setCart(newCart);
                  }
                }}
              >
                -
              </button>
              {item.quantity}
              <button
className="buttonCart"

                onClick={() => {
                  const newCart = [...cart];
                  item.quantity++;
                  setCart(newCart);
                }}
              >
                +
              </button>
              <div className="cart-meal-names">{item.title}</div>
            </span>
            <div className="name-price">
              <div className="price">
                {(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          </div>
        );
      })}
      {cart.length === 0 ? (
        ""
      ) : (
        <div>
          <hr />

          <div className="total">
            <div>Total : </div>
            <div>{calculTotal()}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
