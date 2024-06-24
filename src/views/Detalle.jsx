import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { PizzaContext } from "../contexts/PizzaContext";
import NavBar from "../components/NavBar";


const Detalle = () => {
  const [pizzaDetalle, setPizzaDetalle] = useState({});
  const { pizzas, agregarAlCarrito } = useContext(PizzaContext);
  const { id } = useParams();

  const obtenerDatos = () => {
    const datosPizza = pizzas.find((pizza) => pizza.id === id);

    setPizzaDetalle(datosPizza || {});
  };

  useEffect(() => {
    obtenerDatos();
  }, [pizzas]);

  return (
    <>
    <NavBar />
      <div className="container mt-5">
        <div className="card mb-3 estilos">
          <div className="row g-0">
            <div className="col-md-6">
              <img
                src={pizzaDetalle.img}
                className="img-fluid estilos rounded-start"
                alt={pizzaDetalle.name}
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h5 className="card-title text-capitalize">
                  {pizzaDetalle.name}
                </h5>
                <p className="card-text">{pizzaDetalle.desc}</p>
                <ul>
                  {pizzaDetalle.ingredients?.map((ingredient, i) => (
                    <li key={i}>&#127829; {ingredient}</li>
                  ))}
                </ul>
                <div className="d-flex justify-content-around">
                  <h4>Precio: ${pizzaDetalle.price}</h4>
                  <button
                    className="btn btn-danger"
                    onClick={() => agregarAlCarrito(pizzaDetalle)}
                  >
                    Añadir &#128722;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detalle;
