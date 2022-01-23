import "./App.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Meals from "./components/Meals";
import Logo from "./components/Logo";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
        <section>
          {/* ----------section>articles for dishes---------- */}
          {/* ----bloc of meals---- */}
          <Meals data={data} isLoading={isLoading} />
        </section>
        {/* ------------aside for basket on right------------ */}
        <aside></aside>
      </div>
      );
    </div>
  );
}

export default App;
