import React, {useEffect, useState} from 'react'
import FormSection from './formComponent'
import Productsection from './productComponent'

function Homepage(props) {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-4'>
            <FormSection parentList={props.parentList} Editproduct={props.Editproduct} />
          </div>
          <div className='col-sm-8'>
            
            <Productsection products={props.products} Editproduct={props.Editproduct}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage