import React from 'react'
import Li from './li'

function List() {
    const cars = ['Ford', 'BMW', 'Audi'];
  return (
    <div>
        items
        <ul>
            {cars.map((car, Index) => 
            <Li carlist={car} />
            )}
        </ul>
    </div>
  )
}

export default List