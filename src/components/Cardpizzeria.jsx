import MyContext from "../My_context";
import { useEffect, useContext } from "react";
import axios from "axios";
//import Card from "react-bootstrap/Card";
import { useState } from "react";
//import Descripcion from "../views/Descripcion"


const Cardpizzeria = () => {
  const [ pizzas, setPizzas ] = useState([]);
  const endpoint = "./pizzas.json";


  useEffect(() => {
    const obtenerInfoPizzas = async () => {
      const url = endpoint;
      const data = await axios.get(url);
      setPizzas(data.data.info);
      
    };

    obtenerInfoPizzas();
  }, []);

  //Falta resolver el encontrar la info correcta de las pizzas


//resolver en el return la forma de llamar los datos
//aprender a aplicar .map correctamente
  return (
    <div className="card-container"> 

     <h1>{pizzas.name}</h1>
    
     
    </div>
  );
};

export default Cardpizzeria;
