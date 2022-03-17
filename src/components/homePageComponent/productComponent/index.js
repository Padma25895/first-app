import React, { useState } from 'react'
import Card from '../../uiComponent/cardComponent'
import products from '../../../jsonData/product.json'

function Productsection(props) {
    console.log(props.products)

  return (
      <>
      <div className="container">
          <div className='row'>
              {props.products.length>0 && props.products.map((product,index) =>
                  <div className='col-sm-6' key={index}>
                        <Card
                        image={product.image}
                        title={product.name}
                        description={product.description}
                        price={product.price}
                    >
                        <button className="btn btn-primary me-3" onClick={() => props.Editproduct(product)}>Edit</button>
                        <button className="btn btn-primary ">Delete</button>
                        </Card>
                </div> 
              )}
          </div>
      </div>
      </>
  )
}

export default Productsection