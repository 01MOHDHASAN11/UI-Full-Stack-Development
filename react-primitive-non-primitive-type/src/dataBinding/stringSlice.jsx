import React from 'react'
import { useState, useEffect } from "react";

export default function StringSlice() {
  const [str, setStr] = useState("");
  const [stock,setStock] = useState('true')
  useEffect(()=>{
    setStr("Welcome to React Tutorial")
  },[])
  useEffect(() => {
    setStock('true')
  },[])
  return (
    <div>
        <h1>{str}</h1>
        <h1>Performing string slicing on string</h1>
        <h1>{str.slice(0,7)}</h1>
        <h1>{(stock==='true')?"Available":"Out of stock"}</h1>

    </div>
  )
}
