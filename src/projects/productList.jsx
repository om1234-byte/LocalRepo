import React, { memo } from "react";
import ProductDetail from "./ProductDetail";
function ProductList( {product}){
    return (<>
    <div className="md:grid grid-cols-3 gap-16 space-y-2 md:space-y-0 ">
    {product.map(function(item){
     return(
       
       < ProductDetail   
        
         key={item.title}
         {...item}
         />
     )
    })}
  </div>
    </>);
}

export default memo(ProductList);

