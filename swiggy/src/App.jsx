import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './component/Index';
import Signup from './component/Signup';
import Login from './component/Login';
import Addproduct from './component/Addproduct';
import SingleProductpage from './component/SingleProductpage';
import Showname from './component/Showname'
import Cart from './component/cart'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route exact path='/search' element={<Showname/>} />
        {/* <Route exact path='/signup' element={<Signup/>} />
        <Route exacr path = '/login' element={<Login/>} /> */}
        <Route exact path='/addtheproduct' element={<Addproduct/>} />
        <Route exact path='/addtheproduct/:id' element={<SingleProductpage/>} />
        <Route exact path ='/Cart' element={<Cart/>} />



      </Routes>
      {/* <Index /> */}
    </div>
  );
}

export default App;
