//importar contexto
import { useContext } from "react"
import { PizzaContext } from "../contexts/PizzaContext"

//importar navbar
import NavBar from "../components/NavBar"
import Footer from "../components/Footer"

function Carrito(){

    const { carrito, calcularTotal} = useContext(PizzaContext)


    return(
        <>
        <NavBar />
            <div className="main-container">
                <h2>Detalle del pedido: </h2>
                <div className="carrito-container">
                    <div className="carrito-info-container">
                        <div className="carrito-nombre">
                            {carrito.map((pizza) => (
                            <div key={pizza.index}>
                                <h3>{pizza.name}</h3>
                            </div>
                                    ))}
                        </div>
                        <div>
                            {carrito.map((pizza) => (
                            <div key={pizza.index} className="precio-cantidad-container">
                                <div className="precio">
                                    <p>$ {pizza.price}</p>
                                </div>
                                <div className="cantidad">
                                    <button className="bg-danger text-white">-</button>
                                    <p>{pizza.cantidad}</p>
                                    <button className="bg-primary text-white">+</button>
                                </div>
                            </div>

                            ))}
                        </div>
                    </div>
                </div>
                <h2>Total: ${calcularTotal(carrito)}</h2>
            </div>
        </>
    )
}

export default Carrito