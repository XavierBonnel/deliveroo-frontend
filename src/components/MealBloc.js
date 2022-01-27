import React from "react";

function MealBloc({
  meal,
  index,
  setSelectedRestaurant,
  selectedRestaurant,
  setMealId,
  setMealName,
  mealName,
  setMealPrice,
  mealPrice,
}) {
  return (
    <div
      key={meal.id}
      onClick={() => {
        setSelectedRestaurant(true);
        setMealId(meal.id);
        setMealName(meal.title);
        setMealPrice(meal.price);
        console.log(meal);
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
