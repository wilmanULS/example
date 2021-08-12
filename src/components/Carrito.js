import React from "react";
import "./carrito.css";
import Producto from "./Producto";
const Carrito = ({ carrito, agregarCarrito }) => {
   return (
      <div className="carrito">
         <h2>Tu carrito de compras</h2>

         {/* Esto es una ternario ojo */}
      {carrito.length==0 
      ? <p>No hay elementos</p> 
      :carrito.map((producto) => (
            <Producto key={producto.id} producto={producto} carrito={carrito} agregarCarrito={agregarCarrito}  />
         ))}
      </div>
   );
};

export default Carrito;
