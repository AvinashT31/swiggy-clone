import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Index from './component/Index';
import Signup from './component/Signup';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Index />} />
        <Route exact path='/signup' element={<Signup/>} />



      </Routes>
      <Index />
    </div>
  );
}

export default App;
