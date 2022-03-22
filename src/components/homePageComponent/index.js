import React, {useEffect, useState} from 'react'
import FormSection from './formComponent'
import Productsection from './productComponent'

function Homepage(props) {
  const [productEdit, setProductEdit] = useState("")
  const Editproduct = (product) =>{
    setProductEdit(product)
  }
  return (
    <div> 
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <FormSection parentList={props.parentList} productEdit={productEdit}  />
          </div>
          <div className='col-sm-8'>
            
            <Productsection products={props.products} Editproduct={Editproduct}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage