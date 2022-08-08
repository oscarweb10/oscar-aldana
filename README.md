Proyecto Final de React Js realizado por Oscar Aldana en la Comisión 37075 de Coderhouse, cuyo objetivo fue realizar un E-commerce funcional con carro de compra conectado a Firebase.

El proyecto cuenta con las siguientes funcionalidades:

1.- Navegable a través de cinco items: home y cuatro categorías. 
2.- También se puede navegar por cada producto mostrando el detalle del mismo.
3. Desde el Icono del “CardWidget” se puede ir al “carrito” el cualquier momento.
4.- Seleccionando un producto, muestra todas sus características: título, imagen, precio unitario, descripción y cantidad disponible. También se muestran tres botones para sumar, restar y agregar al carrito. 
5.- El Stock tiene un mínimo y un máximo dinámico que activan alerts en cada caso.
6.- El stock se reduce de forma dinámica a razón de las compras efectivas. Cuando el stock de un producto es cero y al presionar cualquiera de los tres botones del menú, se dispara una alert indicando “producto sin stock” y la pagina es dirigida al inicio.
 7.- En el carrito se tienen las opciones de eliminar un producto específico, vaciar el carrito, seguir comprando o confirmar compra. De igual manera se muestra la cantidad, precio y total de cada producto, así como el total de productos que están en el carrito. 
8.- Al confirmar la compra se genera un alert con el “id” de la orden de compra que devuelve Firebase. Luego sigue el registro del cliente a través de una Ventana Modal con un sencillo formulario que, al ser enviado, dirige la página a finalizar compra que dispara otra Ventana Modal con toda la descripción de la compra.

Finalmente se activa un alert de “Gracias por su Compra”. Para luego redirigir la página al inicio con todos los productos.

Librerías y Frameworks
•	Html y Css
•	React router dom
•	Api fakestoreapi.com
•	Bootstrap
•	Firebase
•	SweetAlert


Un agradecimiento especial al Profesor Sebastián Ancavil y a Josué Oroya, mi tutor.








# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
