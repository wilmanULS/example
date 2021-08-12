import React, { Fragment, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Producto from "./components/Producto";
import Carrito from "./components/Carrito";
function App() {

  //crear llistado de productos
  const[productos, setProductos]=useState([
    {id:1, nombre:'Camiseta Levis' ,precio:100},
    
    {id:2, nombre:'Camiseta Adidas' ,precio:10},
    
    {id:3, nombre:'Camiseta Puma' ,precio:60},
    
    {id:4, nombre:'Camiseta RM' ,precio:80},

   
  ]);
   //State para un carrito de compras

   const [carrito, agregarCarrito]=useState([]);

  const fecha=new Date().getFullYear();
   return (
      <Fragment>
         <Header 
         titulo='Tienda Virtual'
         />
         <h1>Lista de productos</h1>
         {productos.map(producto =>(

            <Producto
          key={producto.id}
          producto={producto}
          productos={productos}
          carrito={carrito}
          agregarCarrito={agregarCarrito}
          />
         ))}
         
         <Carrito
         carrito={carrito}
         agregarCarrito={agregarCarrito}
         /> 
         <Footer
         fecha={fecha} 
         />
      </Fragment>
   );
}

export default App;
