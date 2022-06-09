//Importacion de react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'
//Importacion Provider
import { CartProvider } from './context/CartContext'
//Importaciones de views
import Home from './views/Home/Home'
import Products from './views/Products/Products'
import Cart from './views/Cart/Cart'
import Navbar from './components/Navbar/Navbar';
import Category from './views/Category/Category';
import Item from './views/Item/Item';


//RENDERIZADO DE MI APP
function App() { 
  return (
    <BrowserRouter>
      <CartProvider>
      <Navbar/>
        <Routes>
            <Route>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/category/:categoryId" element={<Category/>}/>
                <Route exact path="/item/:itemId" element={<Item/>}/>
                <Route exact path="/cart" element={<Cart/>}/>
            </Route>
        </Routes>  
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
