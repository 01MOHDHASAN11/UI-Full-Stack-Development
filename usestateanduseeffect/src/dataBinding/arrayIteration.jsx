import {useState } from "react"

export default function DataBinding(){
     
      const [categories] = useState(['All', 'Electronics', 'Footwear']);

     return(
        <div className="container-fluid">
            <header>
                <nav className="d-flex justify-content-between bg-black p-3">
                    {
                        categories.map((category)=><button className="btn btn-danger" key={category}>{category}</button>)
                    }
                </nav>
            </header>
            <h2>Category</h2>
            <ul>
                {
                    categories.map((category)=><li key={category}>{category}</li>)
                }
            </ul>
            <h2>Select Category</h2>
            <select>
                {
                    categories.map((category)=><option key={category} value={category}>{category}</option>)
                }
            </select>
            <h2>Select Categoried</h2>
            <ul className="list-unstyled">
            {
                categories.map((category)=>{
                    return(
                        <li key={category}><input type="checkbox" key={categories} value={category}/><label>{category}</label></li>
                    )
                })
            }
            </ul>
        </div>
     )
}
