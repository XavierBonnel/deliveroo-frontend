import React from "react";

function Meals({ data, isLoading }) {
  return (
    <div className="under-section">
      {isLoading ? (
        <p>Loading in progress...</p>
      ) : (
        <div className="meal-list">
          {data["categories"].map((mealType, index) => {
            return (
              <div className="meals" key={index}>
                {mealType.meals !== [] && (
                  <div>
                    <h3>{mealType.name}</h3>
                    <div className="meal">
                      {mealType.meals.map((meal, index) => {
                        return (
                          <div key={index} className="meal-description">
                            <div className="meal-text">
                              <h4>{meal.title}</h4>
                              <p>{meal.description}</p>
                              <span className="price">{meal.price}€</span>
                              {meal.popular && <span>Populaire</span>}
                            </div>
                            <div className="meal-image">
                              {meal.picture && (
                                <img src={meal.picture} alt="meal picture" />
                              )}
                            </div>
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
      )}
    </div>
  );
}

export default Meals;
