import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Meals from "./components/Meals";
import Logo from "./components/Logo";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(false);
  const [mealOrdered, setMealOrdered] = useState(1);
  const [mealId, setMealId] = useState("");
  const [mealName, setMealName] = useState("");
  const [mealPrice, setMealPrice] = useState();
  const [mealList, setMealList] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://my-deliveroo--backend.herokuapp.com/"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();

    return () => {};
  }, []);

  const calculTotal = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total.toFixed(2);
  };

  return (
    <div className="App">
      {/* ------------header------------ */}
      <Logo />
      <hr />
      <div className="container">
        {/* ----------hero>restaurant selected---------- */}
        <div className="selected-restaurant">
          <div>
            {isLoading ? (
              <p>data loading...</p>
            ) : (
              <div>
                <div className="text-bloc-selected-restau">
                  <h1>{data.restaurant.name}</h1>
                  <p>{data.restaurant.description}</p>
                </div>
                <img src={data.restaurant.picture} alt="restaurant photo" />
              </div>
            )}
          </div>
        </div>
        {/* ------------section on left------------ */}
        <div className="below-selected-restaurant">
          <section>
            {/* ----------section>articles for dishes---------- */}
            {/* ----bloc of meals---- */}
            <Meals
              data={data}
              isLoading={isLoading}
              setSelectedRestaurant={setSelectedRestaurant}
              selectedRestaurant={selectedRestaurant}
              setMealId={setMealId}
              mealId={mealId}
              setMealName={setMealName}
              mealName={mealName}
              mealPrice={mealPrice}
              setMealPrice={setMealPrice}
              cart={cart}
              setCart={setCart}
            />
          </section>
          {/* ------------aside for basket on right------------ */}
          <aside>
            <p>{console.log(cart)}</p>

            {cart.map((item) => {
              return (
                <div>
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
                  {item.title}

                  {(item.price * item.quantity).toFixed(2)}
                </div>
              );
            })}
            {/*{selectedRestaurant ? (
              <div>
                {/* {mealList.map((meal, index) => {
                  return()
                })} 
                <div className="selected-meal">
                  <button
                    onClick={() => {
                      setMealOrdered(mealOrdered - 1);
                      setMealPrice(mealPrice - mealPrice);
                    }}
                  >
                    -
                  </button>
                  <span>{mealOrdered}</span>
                  <button
                    onClick={() => {
                      setMealOrdered(mealOrdered + 1);
                      setMealPrice(mealPrice + setMealPrice);
                    }}
                  >
                    +
                  </button>
                  <span>{mealName} </span>
                  <span>{mealPrice}</span>
                </div>
                <hr />
                <div className="sousTotal">
                  <span>Sous-Total </span>
                  <span>price</span>
                </div>
                <div className="livraison">
                  <span>Frais de livraison </span>
                  <span>price</span>
                </div>
                <div className="total">
                  <span>Total </span>
                  <span>{calculTotal}</span>
                </div>
                <button className="btn-validate">Valider mon panier</button>
              </div>
            ) : (
              <span>Votre panier est vide</span>
            )}*/}
          </aside>
        </div>
      </div>
      );
    </div>
  );
}

export default App;
