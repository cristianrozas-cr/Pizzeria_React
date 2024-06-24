//Acá debemos exportar el contexto y el provider

import { createContext, useState, useEffect } from "react";



export const PizzaContext = createContext();

export default function PizzaProvider({children}) {
    const [pizzas, setPizzas] = useState([]);
    const [carrito, setCarrito] = useState([]);

    async function getPizzas() {
        const response = await fetch("/pizzas.json");
        const data = await response.json();
        setPizzas(data);

    }
 
    useEffect(() => {
        getPizzas()
    }, [])

    function agregarAlCarrito({id, name, price, img}){
       const producto = {id, name, price, img, cantidad: 1}
       const indicePizzas = carrito.findIndex((pedido) => pedido.id === id)
       if (indicePizzas >= 0){
        carrito[indicePizzas].cantidad++
        setCarrito([...carrito])
       } else {
        setCarrito([...carrito, producto])
       }
      }
    console.log(carrito)

    function calcularTotal(carrito){
      let totalAPagar = 0;
      for (const pizza of carrito) {
         totalAPagar += pizza.price * pizza.cantidad;
      }
      return totalAPagar
    }

    return (
      <>
      <PizzaContext.Provider value={{pizzas, setPizzas, carrito, setCarrito, agregarAlCarrito, calcularTotal}}>
        {children}
      </PizzaContext.Provider>
      </>
    )
  }
    
  
  