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
        <div className="below-selected-restaurant">
          <section>
            {/* ----------section>articles for dishes---------- */}
            {/* ----bloc of meals---- */}
            <Meals data={data} isLoading={isLoading} />
          </section>
          {/* ------------aside for basket on right------------ */}
          <aside>
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                ad necessitatibus soluta porro id ut quia est consequatur in,
                velit provident magni amet laudantium voluptate possimus
                adipisci officia delectus sunt? Perferendis consectetur facilis
                labore! Beatae laudantium totam sapiente soluta doloremque
                incidunt quos ad necessitatibus tempora rem aperiam doloribus,
                maxime quibusdam alias optio suscipit odit numquam quo. Corporis
                odio unde repellendus quos, omnis non dolores suscipit nobis
                ipsam ea tempora distinctio nulla rem? Nisi, quisquam id? Id
                temporibus ipsa, dolores, consectetur quos voluptas quo officia
                officiis nemo quaerat explicabo sint laudantium, nesciunt quae
                corrupti vitae praesentium illum dolore. Rerum expedita
                voluptatibus laudantium? Officiis ratione mollitia enim libero
                reiciendis numquam placeat iusto.
              </p>
            </div>
          </aside>
        </div>
      </div>
      );
    </div>
  );
}

export default App;
