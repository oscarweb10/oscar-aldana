import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './containers/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import NotFound from './components/NotFound';
import ShopProvider from './context/ShopContext';
import Cart from './containers/Cart';
//import ModalCart from './containers/Cart/ModalCart';
//import ModalCliente from './containers/Cart/ModalCliente';
import Checkout from './components/Checkout';

function App() {

  return (
   <ShopProvider>
     <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />}></Route>
          <Route path='/category/:categoryid' element={<ItemListContainer />}></Route>
          <Route path='/detail/:productid' element={<ItemDetailContainer />}></Route>
          <Route path='/cart' element={<Cart />}></Route>
         

          <Route path="/Checkout" element={<Checkout />} />

            
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ShopProvider>
  );
}

export default App;
