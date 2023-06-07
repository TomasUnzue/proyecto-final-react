import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {CartProvider} from './context/CartContext'


function App (){
    return(
      <div className= "App">
        <BrowserRouter>
          <NavBar/>
            <Routes>
              <Route path='/' element={<ItemListContainer/>}/>
              <Route path='/category/categoryId' element={<ItemListContainer/>}/>
              <Route path='item/:itemId' element={<ItemDetailContainer/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='*' element={ItemListContainer}/>
            </Routes>
          <CartProvider/>
        </BrowserRouter>
      </div>
  );
}
export default App;