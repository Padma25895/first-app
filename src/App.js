
import './App.css';
import Header from './components/headerComponent/index'
import Homepage from './components/homePageComponent';
import Productdetails from './components/productdetailscomponent';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import {useState} from 'react';


function App() {
  const [products, setProducts] = useState('')
  const parentList = (data) => {
    setProducts(data)
  }
  return (
    <Router>
    <Header />

      <Routes>
        <Route exact path='/' element={<Homepage parentList={parentList}  products={products}  />} />
        <Route exact path='/ProductDetails' element={<Productdetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
