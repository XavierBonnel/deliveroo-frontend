import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";

//components
import Meals from "./components/Meals";
import Logo from "./components/Logo";
import Cart from "./components/Cart";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [selectedRestaurant, setSelectedRestaurant] = useState(false);
  const [mealId, setMealId] = useState("");
  const [mealName, setMealName] = useState("");
  const [mealPrice, setMealPrice] = useState();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://deliveroo-backend.onrender.com/"
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
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <div className="container">
          {/* ----------hero>restaurant selected---------- */}
          <div className="selected-restaurant">
            <div>
              <div>
                <div className="text-bloc-selected-restau">
                  <h1>{data.restaurant.name}</h1>
                  <p>{data.restaurant.description}</p>
                </div>
                <img src={data.restaurant.picture} alt="restaurant photo" />
              </div>
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
              <Cart cart={cart} setCart={setCart} calculTotal={calculTotal} />
            </aside>
          </div>
        </div>
      )}
      );
    </div>
  );
}

export default App;
