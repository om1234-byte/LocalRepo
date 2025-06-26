import { useState } from 'react'

//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {Products } from './product'
import ProductList from './projects/productList'
//import Table from '../projects/table'
//import Tablerow from '../projects/tablerow';
import ProductListPage from './projects/productListPage';
import ProductDetail from './projects/ProductDetail';
//import LecturePage from '../projects/LecturePage';
//import AssignmentPage from '../projects/AssignmentPage';
//import Side_bar_R from '../projects/side_barWithRouter';
import { Routes ,Route} from 'react-router-dom';
import NavBar from './projects/navbar';
import NoMatch from './projects/NoMatching';


// const [count, setCount] = useState(0)      //inform react about any change in code
  
      
  
 
function App(){    

   const savedDataString=localStorage.getItem("myCart")  ||"{}";
   const savedData=JSON.parse(savedDataString);

  const[cart,setCart]=useState(savedData);

    console.log("cart is ",cart);

  function setAddToCart(productId,count){
   // console.log ("productid",productId,"  count ",count);
     const oldCount=cart[productId] || 0;
     const newcart={...cart , [productId]:oldCount + count};
     
       setCart(newcart);
     const cartstring=JSON.stringify(newcart);
     localStorage.setItem("myCart",cartstring);
   
  }
const totalCount=Object.keys(cart).reduce(function(previous,current){
  return previous + cart[current];
},0);
  
  
  //                                         index determine home page hence no url need for it
  return (<>
  <div className='bg-gray-200  h-screen overflow-auto flex flex-col'>
    <NavBar  count={totalCount}/>
  <div className='grow'>
    <Routes>
    <Route index element={<ProductListPage/>} ></Route>                           
    <Route path = "/projects/product/:id" element={<Products addToCart={setAddToCart}/>}></Route>
     <Route path = "*" element={<NoMatch text={"not found"}/>}/>
   </Routes>
 
   </div>
   <NavBar/>
    </div>         

  
  </> );

}

export default App;
 
//<Routes>
 // <Route index element={<ProductListPage/>} ></Route>                          
  //<Route path = '/projects/product/:id' element={<Products/>}></Route>
//</Routes>

