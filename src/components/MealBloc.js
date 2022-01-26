import React from 'react';

function MealBloc({meal, index}) {
  return <div><div key={index} className="meal-description">
                            <div className="meal-text">
                              <h4>{meal.title}</h4>
                              <p>{meal.description}</p>
                              <div className="price-pop" >
                              <span className="price">{meal.price}€</span>
                              {meal.popular && (
                                <span className="popular">Populaire</span>
                              )}
                              </div>
                            </div>
                            <div className="meal-image">
                              {meal.picture && (
                                <img src={meal.picture} alt="meal picturee" />
                              )}
                            </div>
                          </div></div>;
}

export default MealBloc;
