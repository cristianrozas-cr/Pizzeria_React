//Importamos el contexto
import { useContext } from "react";
import { PizzaContext } from "../contexts/PizzaContext";
import { useNavigate } from "react-router";
import Card from "../components/Card";
import Navbar from "../components/NavBar";


function Home() {
  //Consumimos el contexto
  const { pizzas, carrito, agregarAlCarrito } = useContext(PizzaContext)

  return (
    <>
    <Navbar />
    <div className="container my-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <Card /> 
      </div>
    </div>
    
    <footer>Pizzeria footer</footer>

    </>
  )
}

export default Home;


