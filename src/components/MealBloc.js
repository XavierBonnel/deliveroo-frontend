import React from "react";

function MealBloc({ meal, setCart, cart }) {
  return (
    <div
      key={meal.id}
      onClick={() => {
        const itemAlreadyOrdered = cart.find((item) => item.id === meal.id);
        console.log(itemAlreadyOrdered);

        if (itemAlreadyOrdered === undefined) {
          const newCart = [...cart];
          newCart.push({
            title: meal.title,
            id: meal.id,
            quantity: 1,
            price: meal.price,
          });
          setCart(newCart);
        } else {
          const newCart = [...cart];
          itemAlreadyOrdered.quantity++;
          setCart(newCart);
        }
      }}
    >
      <div className="meal-description">
        <div className="meal-text">
          <h4>{meal.title}</h4>
          <p>{meal.description}</p>
          <div className="price-pop">
            <span className="price">{meal.price}€</span>
            {meal.popular && <span className="popular">Populaire</span>}
          </div>
        </div>
        <div className="meal-image">
          {meal.picture && <img src={meal.picture} alt="meal picturee" />}
        </div>
      </div>
    </div>
  );
}

export default MealBloc;
