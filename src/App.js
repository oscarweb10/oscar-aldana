/*import logo from './logo.svg';*/
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './containers/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NotFound from './components/NotFound';

function App() {
  return (
    <BrowserRouter>
     
      <NavBar/>
      <Routes>
        <Route path = '/' element={<ItemListContainer/>}></Route>
        <Route path = '/category/:categoryid' element={<ItemListContainer/>}></Route>
        <Route path= '/detail/:productid' element={<ItemDetailContainer/>}></Route>
        <Route path = '*'element= {<NotFound/>}/>
      </Routes>
      
    </BrowserRouter>
   
  );
}

export default App;
