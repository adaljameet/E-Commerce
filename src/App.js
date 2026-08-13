import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/productdetail' element={<ProductDetail />} />
      </Routes>


    </>
  );
}

export default App;
