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
  mealList,
  setMealList,
}) {
  const handlelick = () => {
    const newMealList = [...mealList];
    //chercher dans mealList si déjà meal.title identique
    console.log("avant la liste");
    for (let i = 0; i < mealList.length; i++) {
      console.log("dans la boucle for");
      if (mealList.length === 0) {
        console.log("dans la liste");
        newMealList.push({
          id: meal.id,
          title: meal.title,
          price: meal.price,
          quantity: 1,
        });
        setMealList(newMealList);
        setSelectedRestaurant(true);
      } else {
        console.log("dans else");
        if (mealList[i].id === meal.id) {
          break;
        } else {
          newMealList.push({
            id: meal.id,
            title: meal.title,
            price: meal.price,
            quantity: 1,
          });
          setMealList(newMealList);
          setSelectedRestaurant(true);
        }
      }
    }
  };

  return (
    <div key={meal.id} onClick={handlelick}>
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
