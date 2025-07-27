import { memo, useState } from "react";


import Input from "./input";
//import { Link } from "react-router-dom";

function FormatStyleBasic({data , cart, removeItem , inputChange}){
    console.log("reached");
  
    const [val,setVal]= useState(cart[data.id] || 1);
     console.log("value is:",val);
     
   function passItemId(event){
          const productId = event.currentTarget.getAttribute("productid");
             removeItem({productId});
   }
    function inputValueChange(event){
          const productId = event.target.id;
          const value = +event.target.value || 0;
            const newVal =(inputChange({productId,value}));
            setVal(newVal);
            if(newVal === 0){
              setVal(1);
            }
            
             // console.log("value is:",val);
    
   }
       
   // console.log("data in stylebasic is",data);
      const{thumbnail,title,price} = data;
       console.log("myCartItemFormat component is called","title is",title,"price is",price); 
  return<>
    <div  >
    <Input 
  
    thumbnail={thumbnail}
    title={title}
    price={price}
    id={data.id}
    val={val}
    passItemId={passItemId}
    inputValueChange={inputValueChange}
     />
     
    </div>
</>}



export default memo(FormatStyleBasic);