import { useState } from "react"

export default function DataBinding(){
     
      const [products] = useState([{Name:'TV', Price:45000}, {Name:'Mobile', Price:12000}]);


     return(
        <div className="container-fluid">
           <h2>Products Details</h2>
           <table className="table table-success">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Product Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product)=><tr key={product}><td>{product.Name}</td><td>{product.Price}</td></tr>)
                    }
                </tbody>
           </table>
        </div>
     )
}