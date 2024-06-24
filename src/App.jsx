//Importar vistas
import Home from './views/Home'
import Detalle from './views/Detalle'
import Carrito from './views/Carrito'

//Importar router
import {Routes, Route} from "react-router-dom"

//Importar css y bootstrap
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/pizzas/:id' element={<Detalle />}/>
      <Route path='/carrito' element={<Carrito />}/>
    </Routes>

    </>
  )
}

export default App
