import { useEffect, useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [allData, setAllData] = useState(null);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, [allData]);
  return (
    <section className="shop">
      <h1>Willkommen</h1>
      <article className="product-wrapper">
        {allData ? (
          allData.map((item, index) => (
            <div className="product" key={index}>
              <div className="img-box">
                <img src={item.image} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.price.toFixed(2)}€</p>
              <Link to={`/detail/${item.id}`}>Show more</Link>
            </div>
          ))
        ) : (
          <h5>Laden...</h5>
        )}
      </article>
    </section>
  );
};

export default Shop;
