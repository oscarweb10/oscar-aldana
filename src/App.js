/*import logo from './logo.svg';*/
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './containers/ItemDetailContainer';

function App() {
  return (
    <div className="app">
      <NavBar/>
      {/*<ItemListContainer greeting='Ofertas del dia!!'/>*/}
      <ItemDetailContainer/>
        </div>
  );
}

export default App;
