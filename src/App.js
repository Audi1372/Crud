import Navigation from './components/navbar';
import Products from './components/products';
 import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Action from './components/Action';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';


function App() {
  return (
    <div className="App">
      
      <Navigation />
      <div className='back'>
      <marquee><h1>Welcome to Crud operations</h1></marquee>
      <BrowserRouter>
        <Routes>
          <Route path='/products' element={<Products/>} />
          <Route path='/action' element={<Action />} />
          <Route path='/action/:id/true' element={<Action />} />
          <Route path='/action/:id/false' element={<Action />} />
          <Route path='/about' element={<About />} />
       </Routes>
        </BrowserRouter>
        </div>

    </div>
  );
}

export default App;
