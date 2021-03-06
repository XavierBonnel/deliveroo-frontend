import React from "react";
import MealBloc from "./MealBloc";

function Meals({
  data,
  isLoading,
  setSelectedRestaurant,
  selectedRestaurant,
  setMealId,
  mealId,
  setMealName,
  setMealPrice,
  mealPrice,
  cart,
  setCart,
}) {
  return (
    <div className="under-section">
      <div className="meal-list">
        {data["categories"].map((mealType, index) => {
          return (
            <div className="meals" key={index}>
              {mealType.meals.length !== 0 && (
                <div>
                  <h3>{mealType.name}</h3>
                  <div className="meal">
                    {mealType.meals.map((meal, index) => {
                      return (
                        <div key={index}>
                          <MealBloc
                            data={data}
                            meal={meal}
                            index={index}
                            selectedRestaurant={selectedRestaurant}
                            setSelectedRestaurant={setSelectedRestaurant}
                            setMealId={setMealId}
                            mealId={mealId}
                            mealName={setMealName}
                            setMealName={setMealName}
                            setMealPrice={setMealPrice}
                            mealPrice={mealPrice}
                            cart={cart}
                            setCart={setCart}
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Meals;
