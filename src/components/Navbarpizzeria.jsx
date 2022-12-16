import { NavLink } from "react-router-dom";
import "../assets/css/styles.css";

export default function Navbarpizzeria() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "noactive");
  return (
    <>
      <div className="pizzaheader">
        <div className="nav-container">
          <h5>🍕Pizzeria Mamma Mia</h5>
          <NavLink className={setActiveClass} to="/detallepedido/:id">
            🛒$134.640
          </NavLink>
        </div>
        <div className="subnav-container">
          <h1>¡Pizzería Mamma Mia!</h1>
          <h4>¡Tenemos las mejores pizzas que podrás encontrar!</h4>
        </div>
      </div>
    </>
  );
}
