import { useContext, useEffect, useState } from "react";
import { getProductData } from "./api";
import FormatStyleBasic from "./myCartItemFormat";
import NoMatch from "./NoMatching";
import Loading from "./loading";
import userContext from "../projects/context"; 
import { Navigate } from "react-router-dom";


function MyCart({cart ,UpdateCart}) {
    const{user}=useContext(userContext);
    
    
    if(!user){
        console.log("navigate worked");
        return <Navigate to ="/Login"/>
      }



     const[products,setproduct] = useState([]);
     const[error,setError] = useState(false);
     const[loading,setLoading]=useState(true);
     const[localcart,setLocalCart] = useState(cart);
    console.log("cart is",cart);

   const itemsId = Object.keys(cart);

 // cleanCart();               run this line once a error may come  then  again comment out and refresh .this is to clean localStorage data forcefully in case of when invalid data is stored in local storag

  
   
useEffect(function(){
    setLocalCart(cart);
},[cart])

   useEffect(function(){
    const promiseSet = itemsId.map(function(id){
        return getProductData(id);
    })
    Promise.all(promiseSet).then(function(product){
        
               setproduct(product);
              setLoading(false);
    }).catch(function(){
        console.log('catch worked');
        setError(true);
    })
   // console.log("products are",products);
   },[cart]);

    function removeItemFunctionCall({productId}){
        const newCart={...cart};
        delete newCart[productId];
        UpdateCart(newCart);
        setLoading(true);
    }   
     function changeConfirm(){
        console.log("local cart is",localcart)
         UpdateCart(localcart);
    }

    function handleChange({productId , value}){
             console.log("productid is",productId,"value is",value)
            const newLocalCart = {...localcart,[productId]:value};
            console.log("newLocalCart is",newLocalCart);
            setLocalCart(newLocalCart);
            console.log(localcart[productId]);
            return newLocalCart[productId];               //return number of items in cart
    }
    
   

     function cleanCart() {
        UpdateCart({});
        setLocalCart({});
        localStorage.setItem("myCart", "{}");
    }
     
    if(error){
        return <NoMatch text={"Failded to load resourses"} />
    }
     if(loading){
        return <Loading/>
     }
    

    


   return <>
   <div className=" h-screen p-2  mt-3">
    <div className="bg-white">
    { 
     products.map(function(item){
        return (<FormatStyleBasic data={item} cart={cart} removeItem={ removeItemFunctionCall} inputChange={handleChange} />);
    })
    }
    
   </div>
   <button  onClick={changeConfirm} className="bg-indigo-400 py-2 px-1 hover:bg-blue-700 ">Confirm Changes</button>
     <button  onClick={cleanCart} className="bg-indigo-400  m-2 py-2  px-1 hover:bg-blue-700 ">remove all</button>
   </div>
   </>
         
}

export default MyCart;