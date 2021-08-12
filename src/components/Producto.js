import React from "react";
const Producto = ({ producto, carrito, agregarCarrito, productos }) => {
   const selecionarProducto = id => {
      const Arrayproducto = productos.filter((producto) => producto.id === id)[0];
      agregarCarrito([...carrito, Arrayproducto]);
   }

   //Elliminar productos del carrito

   const eliminarProducto=id=>{
       const productos=carrito.filter(producto=>producto.id !==id);
       //colocar los productos en el state
        agregarCarrito(productos)

   }
   return (
      <div>
         <h2>{producto.nombre}</h2>
         <p>${producto.precio}</p>
       
         {productos?
         (
            <button type="button" onClick={() => selecionarProducto(producto.id)}>
            Comprar
         </button>
         )
         :(
            <button type="button" onClick={() => eliminarProducto(producto.id)}>
            Eliminar
         </button>
         )}
      </div>
   );
};

export default Producto;
