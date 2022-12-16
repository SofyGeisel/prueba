import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbarpizzeria from "./components/Navbarpizzeria";
import { useState } from 'react';
import MyContext from './My_context';

import Cardpizzeria from './components/Cardpizzeria';
import Descripcion from "./views/Descripcion";
import DetallePedido from "./views/DetallePedido";

function App() {

  const [pizzas, setPizzas] = useState('');
  const estadoGlobal = { pizzas, setPizzas };


  return (
    <div className="App">
      <MyContext.Provider value={estadoGlobal}>
      <BrowserRouter>
      <Navbarpizzeria />
      <Routes>
        <Route path='/' element={ <Cardpizzeria pizzas={pizzas} setPizzas={setPizzas} /> } />
      </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
