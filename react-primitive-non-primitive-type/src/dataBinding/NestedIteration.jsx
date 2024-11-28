import { useEffect, useState } from "react"

export default function NestedIteration(){
     
      const [items] = useState(
        [
            {Category:'Electronics', Products:['TV', 'Mobile']},
            {Category: 'Footwear', Products: ['Casuals', 'Boots', 'Sneakers']}
        ]
       )
      
      useEffect(()=>{

           
          
      },[])

     return(
        <div className="container-fluid">
           <h2>Menu</h2>
           <ol>
            {
                items.map((item,index)=><li key={index}>{item.Category}
                    <ul>
                        {
                            item.Products.map((product,index)=>{
                                return <li key={index}>{product}</li>
                            })
                        }
                    </ul>
                </li>)
            }
           </ol>
           <h2>Menu</h2>
           <select>
            {
                items.map((item,index)=><optgroup label={item.Category}>{item.Products.map((product,index)=><option>{product}</option>)}</optgroup>)
            }
           </select>
        </div>
     )
}