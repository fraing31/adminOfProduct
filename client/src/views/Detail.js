import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default props => {
    //console.log(props)
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/${props.match.params.id}`)
            //.then((response) => {
                .then(res => setProduct({
                    ...res.data
                }))
    }, [])
    return (
        <div>
            <h2>{product.title}</h2>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <Link to={`/${product._id}/edit`}>
                Edit
            </Link>
        </div>
        

    )
}
