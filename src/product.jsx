import React, {useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
//import alldata from "./projects/DummyData";
import { getProductData } from "./projects/api";
import Loading from "./projects/loading";
import NoMatch from "./projects/NoMatching";


export function Products({addToCart}){

   const params=useParams();   //it take out varibes from url and create object of that and thrn return it 
   const id=+(params.id);
    //   OR
   //const {id} = useParams();            object destructuring
   console.log('id is',id);

   const[product,setProduct]=useState();
   const[loading,setLoading]=useState(true);
   const[count,setCount]=useState(1);

   function HandleChange(event){
      setCount(+event.target.value);
   }
   function addTocartButton(){
       
      addToCart(id,count);
   }
   function resetCount(){
      setCount(1);
   }

useEffect(function (){
         
        const p= getProductData(id);

         p.then(function(product){
            setProduct(product) ;
            setLoading(false);
         })
           .catch( function(){
             console.log('api me problem aa gai hai');
             setLoading(false);
           });
         
    },[id]);      //dependency [id] useEffect run also when id changes

    console.log(id);

   if(loading){
      return <Loading/>;
   }
   if(!product){
      return <NoMatch text={"Opps! Page not found"}/>
   }
  
    
    return  (
    <>
       <Link to="/" className="mt-4 p-1 bg-indigo-600 "> Back to product page</Link>
    <div>
        <img className='w-40' src={product.thumbnail } alt="not load"/>
     <h1>{product.title}</h1>
     <p>{product.category}</p>
     <p>{product.prize}</p>
      <input  type="number" min={0} onChange={HandleChange} value={count}  className="w-12 border border-gray-700 px-1" />
      <button onClick={addTocartButton} className="px-4 py-2 rounded-md bg-red-400 ml-2" >Add to cart</button>
     
      </div>
      <div className="flex justify-between ml-2 mr-2">
      <div>{id>1&& <Link to={"/projects/product/" + (id-1)} onClick={resetCount} className=" m-0.5 bg-gray-400"> Previous</Link>}</div> 
       <div>{id<=30 &&<Link to={"/projects/product/"+(id+1)} onClick={resetCount} className=" bg-gray-400"> Next</Link>}</div>
      </div>
         
    </>)
 
}

    