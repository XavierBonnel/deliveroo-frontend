import React from "react";

function Cart({ cart, setCart, calculTotal }) {
  return (
    <div>
      <p>{console.log(cart)}</p>
      {cart.length === 0 ? (
        <p>mon panier est vide</p>
      ) : (
        <button className="btn-validate">Valider mon panier</button>
      )}

      {cart.map((item) => {
        return (
          <div className="selected-meal">
            <span>
              <button
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
                onClick={() => {
                  const newCart = [...cart];
                  item.quantity++;
                  setCart(newCart);
                }}
              >
                +
              </button>
            </span>
            {item.title} {(item.price * item.quantity).toFixed(2)}
          </div>
        );
      })}
      {cart.length === 0 ? "" : <div>{calculTotal()}</div>}
    </div>
  );
}

export default Cart;
