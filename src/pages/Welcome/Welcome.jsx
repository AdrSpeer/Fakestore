import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <section className="welcome">
      <h1>Willkommen im Shop</h1>
      <Link to="/shop">Zum Shop</Link>
    </section>
  );
};

export default Welcome;
