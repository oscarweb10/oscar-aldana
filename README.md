<div align="center">
        <img
          src="./assets/ElectricoEnLinea.GIF"
          alt="react"
          width="200px"
          height="45px"
        />
    </a>
</div>


Proyecto Final de React Js realizado por Oscar Aldana en la Comisión 37075 de Coderhouse, cuyo objetivo fue realizar un E-commerce funcional con carro de compra conectado a Firebase.

El proyecto cuenta con las siguientes funcionalidades:

1.- Navegable a través de cinco items: home y cuatro categorías. 
2.- También se puede navegar por cada producto mostrando el detalle del mismo.
3.- Desde el Icono del “CardWidget” se puede ir al “carrito” el cualquier momento.
4.- Seleccionando un producto, muestra todas sus características: título, imagen, precio unitario, descripción y cantidad disponible. También se muestran tres botones para sumar, restar y agregar al carrito. 
5.- El Stock tiene un mínimo y un máximo dinámico que activan alerts en cada caso.
6.- El stock se reduce de forma dinámica a razón de las compras efectivas. Cuando el stock de un producto es cero y al presionar cualquiera de los tres botones del menú, se dispara una alert indicando “producto sin stock” y la pagina es dirigida al inicio.
 7.- En el carrito se tienen las opciones de eliminar un producto específico, vaciar el carrito, seguir comprando o confirmar compra. De igual manera se muestra la cantidad, precio y total de cada producto, así como el total de productos que están en el carrito. 
8.- Al confirmar la compra se genera un alert con el “id” de la orden de compra que devuelve Firebase. 
9.- Con el componente Checkout se realiza el registro del cliente a través de una Ventana Modal con un sencillo formulario que, al ser enviado, al confirmar comprar aparece la ventana final con los datos del cliente y el resumen de la compra.
10.- Finalmente al presionar Volver a inicio se limpia el carrito y la pagina de nuevo muestra todos los productos.

Librerías y Frameworks
•	Html y Css
•	React router dom
•	Api fakestoreapi.com
•	Bootstrap
•	Firebase
•	SweetAlert


Un agradecimiento especial al Profesor Sebastián Ancavil y a Josué Oroya, mi tutor.


## Installation

`npm install`

## Despliegue

`npm start`


