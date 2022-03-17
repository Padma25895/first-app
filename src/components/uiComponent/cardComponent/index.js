import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

function Card(props) {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={props.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <h3 className="card-title">{props.price}</h3>
                <p className="card-text">{props.description}</p>
                {props.children}
            </div>
        </div>
    )
}

export default Card