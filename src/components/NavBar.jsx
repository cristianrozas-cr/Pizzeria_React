import { Link, NavLink } from "react-router-dom";
//importar contexto
import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";

const NavBar = () => {

    const {carrito} = useContext(PizzaContext);

  return (
    <div className="navbar text-white py-3">
      <div className="container d-block">
        <div className="d-flex justify-content-between">
          <Link
            to="/"
            className="logo-nombre mx-1 mb-0"
          >
            <h4 className="mb-0">&#127829; Pizzería Mamma Mia!</h4>
          </Link>

          <NavLink to="/carrito" className="logo-nombre mx-1 mb-0">Carrito: {carrito.length}</NavLink>

        </div>
      </div>
    </div>
  );
};

export default NavBar;
