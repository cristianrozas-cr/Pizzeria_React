import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzaContext } from "../contexts/PizzaContext";
//Formato numero

const Card = () => {
  //Consumimos el contexto
  const { pizzas, carrito, agregarAlCarrito } = useContext(PizzaContext)

  const navigate = useNavigate();

  return (
    <>
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className="col"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={pizza.img}
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title text-capitalize">Pizza {pizza.name}</h4>
              <hr />
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>

              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}>&#127829; {ingredient}</li>
                ))}
              </ul>
            </div>

            <h4 className="text-center text-dark pb-3">
              Precio: ${(pizza.price)}
            </h4>

            <div className="d-flex justify-content-around mb-4">
              <button
                to={`pizza/${pizza.id}`}
                className="btn btn-info text-white"
                onClick={() => navigate(`/pizzas/${pizza.id}`)}
              >
                Ver Más &#128064;
              </button>

              <button
                className="btn btn-danger"
                onClick={() => agregarAlCarrito(pizza)}
              >
                Agregar al carrito &#128722;
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
