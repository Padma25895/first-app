
import './App.css';
import Header from './components/headerComponent/index'
import Homepage from './components/homePageComponent';
import Productdetails from './components/productdetailscomponent';
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import {useState} from 'react';


function App() {
  const [products, setProducts] = useState('')
  console.log(products, 'parentProduct')
  const parentList = (data) => {
    setProducts(data)
  }
  const Editproduct = (product) => {
    console.log(product)
  }
  return (
    <Router>
    <Header />

      <Routes>
        <Route exact path='/' element={<Homepage parentList={parentList}  products={products} Editproduct={Editproduct} />} />
        <Route exact path='/ProductDetails' element={<Productdetails />} /> 
      </Routes>
    </Router>
  );
}

export default App;
