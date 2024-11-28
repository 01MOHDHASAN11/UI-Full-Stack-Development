import React, { useEffect, useState } from 'react'

export default function ObjectTraversel() {
    const [product, setproduct] = useState({})
    useEffect(()=>{
        setproduct({Name:'Samsung TV', Price:56000})
    },[])
  return (
    <div>
    <h1>{product.Name}</h1>
        <ul className="list-unstyled">
        {
            Object.keys(product).map((key)=><li key={key}>{key}: {product[key]}</li>)
        }
        </ul>
    </div>
  )
}
