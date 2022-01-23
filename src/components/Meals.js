import React from "react";

function Meals({ data, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading in progress...</p>
      ) : (
        <div>
          {data["categories"].map((mealType, index) => {
            return (
              <div key={index}>
                <h3>{mealType.name}</h3>
                <div className="meal">
                  {mealType.meals.map((meal, index) => {
                    return (
                      <div key={index} className="meal">
                        <h4>{meal.title}</h4>
                        <p>{meal.description}</p>
                        <span>{meal.price}</span>
                        {meal.popular && <span>Populaire</span>}
                        <img src={meal.picture} alt="meal picture" />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Meals;
