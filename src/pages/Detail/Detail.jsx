import { useEffect, useState } from "react";
import "./Detail.css";
import { Link, useParams } from "react-router-dom";

const Detail = () => {
  const [data, setData] = useState(null);
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((fetchData) => setData(fetchData))
      .catch((err) => console.log("Fehlerbeim Laden der API", err));
  }, []);

  const { id } = useParams();
  useEffect(() => {
    const findId = data?.find((item) => Number(item.id) === Number(id));
    setFilterData(findId);
  }, [data]);

  return (
    <section className="detail">
      <Link to="/shop">Zurück zum Shop</Link>
      {filterData ? (
        <div className="detail-product">
          <div className="detail-img">
            <img src={filterData.image} alt={filterData.title} />
            <p className="price">{filterData.price?.toFixed(2)}€</p>
          </div>
          <h3>{filterData.title}</h3>
          <p className="disc">{filterData.description}</p>
        </div>
      ) : (
        <h5>Laden...</h5>
      )}
    </section>
  );
};

export default Detail;
