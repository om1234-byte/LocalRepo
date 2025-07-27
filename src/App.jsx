import { useState ,useEffect} from 'react'
import React from 'react';
import userContext  from './projects/context';
import './App.css'
import {Products } from './product'
import axios from 'axios';
import ProductListPage from './projects/productListPage';

import { Routes ,Route} from 'react-router-dom';
import NavBar from './projects/navbar';
import NoMatch from './projects/NoMatching';
//import Test from "./projects/test";

import MyCart from './projects/myCart';

import SendLogin, { LoginApi } from './projects/LoginApi';
import Loading from './projects/loading';
//import Display from './projects/display';


// const [count, setCount] = useState(0)      //inform react about any change in code
  

  
 
function App(){    

   const savedDataString=localStorage.getItem("myCart")  ||"{}";
   const savedData=JSON.parse(savedDataString);
  
  const[cart,setCart]=useState(savedData);
  const[user,setUser]=useState();
  const[userLoading,setUserLoading] = useState(true);
   
  const token=localStorage.getItem("token");
 useEffect(function(){
  if(token){
    axios.get("https://myeasykart.codeyogi.io/me",{
      headers:{
        Authorization:token,
      },
    })
    .then( (response) => {
      setUser(response.data);
       setUserLoading(false);
    })
  }else{
        setUserLoading(false);
  }
 },[]);
  
  console.log("login user is",user);


    console.log("cart is ",cart);

  function setAddToCart(productId,count){
   // console.log ("productid",productId,"  count ",count);
     const oldCount=cart[productId] || 0;
     const newcart={...cart , [productId]:oldCount + count};
     updateCart(newcart);
  }
  function updateCart(newcart){
       setCart(newcart);
     const cartstring=JSON.stringify(newcart);
     localStorage.setItem("myCart",cartstring);
   
  }
 const totalCount=Object.keys(cart).reduce(function(previous,current){
  return previous + cart[current];
 },0);

  if(userLoading){
    return <Loading/>
  }
 
  
  //                                         index determine home page hence no url need for it
  return (
   <>
  <div className='bg-gray-200  h-screen overflow-auto flex flex-col'>
      <userContext.Provider value={{user,setUser}}>
    <NavBar  count={totalCount}/>
   
  
  <div className='grow'>
  
    <Routes>
    <Route index element={<ProductListPage/>} ></Route>                           
    <Route path = "/projects/product/:id" element={<Products addToCart={setAddToCart}/>}></Route>
    
     <Route path="/myCart" element={<MyCart cart={cart} UpdateCart={updateCart}/>} />
     <Route path = "*" element={<NoMatch text={"not found"}/>}/>
     <Route path = "/Login" element={<SendLogin/>} />
     
   </Routes >
  
   </div>
    </userContext.Provider>
 
    </div>         

  
  </>
 );

    
  
}

export default App;
 

/*
 <div className='bg-gray-200  h-screen overflow-auto flex flex-col'>
    <NavBar  count={totalCount}/>
   

  <div className='grow'>
    <Routes>
    <Route index element={<ProductListPage/>} ></Route>                           
    <Route path = "/projects/product/:id" element={<Products addToCart={setAddToCart}/>}></Route>
     <Route path = "*" element={<NoMatch text={"not found"}/>}/>
   </Routes>
 
   </div>
  
    </div>   
    */



   