const url=require("url")
// for(let x in url){
//     console.log(`${x} [${typeof url[x]}]`)
// }

var obj=new url.URL(`https://fakestoreapi.com/products/category/jewelery`)
console.log(`${obj.search}\n${obj.protocol}\n${obj.host}\n${obj.password}`)