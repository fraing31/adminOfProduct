import React from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
export default props => {
    return (
        <div>
            <h1>All Products: </h1>
            {props.product.map((something, idx)=>{
                console.log(something);
                return <p key={something._id}>
                            <Link to={`/${something._id}`}>
                                {something.title}
                            </Link>
                           
                       </p>
            })}
        </div>
    )
}
