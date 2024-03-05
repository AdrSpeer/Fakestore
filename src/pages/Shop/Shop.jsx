import { useEffect, useState } from "react";
import "./Shop.css";
import { Link } from "react-router-dom";

const Shop = () => {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setAllData(data))
      .catch((err) => console.log("Fehler beim Laden der API", err));
  }, []);
  return (
    <section className="shop">
      <h1>Willkommen</h1>
      <article className="product-wrapper">
        {allData.map((item, index) => (
          <div className="product" key={index}>
            <div className="img-box">
              <img src={item.image} alt={item.title} />
            </div>
            <h6>{item.title}</h6>
            <p>{item.price.toFixed(2)}€</p>
            <Link>Show more</Link>
          </div>
        ))}
      </article>
    </section>
  );
};

export default Shop;
