import './App.css';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='lists-container'>
          <ProductList type='catalogue'/>
          <ProductList type='cart'/> 
        </div>
      </header>
    </div>
  );
}

export default App;
