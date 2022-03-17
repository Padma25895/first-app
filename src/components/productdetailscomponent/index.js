import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Productdetails() {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-sm-6 '>
                <div className=' image'>
                <img src='https://cdn.shopify.com/s/files/1/0524/0238/9183/products/photo_2021-05-02_18-48-38_540x.jpg?v=1627129582' alt='saree' />
                </div>
                
            </div>
            <div className='col-sm-6'>
                <div className='product'>
                    <h3>Product Name</h3>
                    <h2>Rs. 500</h2>
                    <p>Quantity : 100nos</p>
                    <h5>Description:</h5>
                    <p>Dummy content</p>
                    <button>Add to Cart</button>
                    <Link to='/'><button> Back to Home</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productdetails