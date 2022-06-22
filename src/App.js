/*import logo from './logo.svg';*/
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className="app">
      <NavBar/>
      <ItemListContainer greeting='Ofertas del dia!!'/>
        </div>
  );
}

export default App;
