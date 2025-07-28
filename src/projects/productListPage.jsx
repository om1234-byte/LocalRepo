import React from "react";
import { useEffect, useState,useMemo, memo,useContext } from 'react'
import getProductList from './api';
import ProductList from './productList'
import NoMatch from './NoMatching';
import Loading from './loading';
import userContext from "../projects/context"; 
import { Navigate } from "react-router-dom";

function ProductListPage() {

 const{user}=useContext(userContext);
  
  if(!user){
      console.log("navigate worked");
      return <Navigate to ="/Login"/>
    }

  const [ProductData,setProductList]=useState([]);
  const[loading,setLoading]=useState(true);

 // const [count, setCount] = useState(0)      //inform react about any change in code
    const[query,setQuery]=useState("");
    const[sort,setSort]=useState('default');
    
   



  useEffect(function(){                         // run only when new data mount on screen
    const list = getProductList();
    list.then(function(products){                  // function called when actual data(response) will load .responce type may 
                                                   //vary as per  different web site this website response include object named data containing an array of name products which contain data                                             //their are some other keys in object.response also have header data,body data,configure data and many more. 
    setProductList(products);
    setLoading(false);
   } ).catch( <NoMatch text={"Poor internet connection"}/>);

   },[]);
    
 // let ProductData=getProductData();


   const data=ProductData.filter(function(item){
     const lowerCasepName=item.title.toLowerCase();
        const lowerCaseQuery=query.toLowerCase();

        return (lowerCasepName.indexOf(lowerCaseQuery) != -1);   
    });
  
 

  function filterData(event){
     setQuery(event.target.value);
  
    console.log("new data",data);
     //changeData(data);
  }
  
    function handleSort(event){
      setSort(event.target.value);
    }
    useMemo(function(){
    console.log(sort);
    if (sort == "price"){
      data.sort(function(x,y){
       return x.price-y.price;
      });
    } else if(sort == "name"){
      data.sort(function(x,y){
        return (x.title<y.title)?-1:1;
      });
        
      }
    },[sort,data]);
    
  

 if(loading){
  return <Loading/>;
 }
  
 return( 
 <div className='max-w-6xl bg-white px-20 m-auto py-[50px] my-10 '>
 <input onChange={filterData} 
 placeholder='search'
 className='border  rounded-md mb-2'
 />
 <select className='border  border-gray-300  mb-1 ml-20'
 value={sort} onChange={handleSort}>
   <option value="default">sort by default</option>
   <option value ="price">sort by price</option>
   <option value ="name">sort by name</option>
 </select>
   {data.length > 0 && <ProductList product={data}/>}
   {data.length == 0 && 
   <>
   <NoMatch text={"no product found"}></NoMatch>
  
   </>}
  </div>
 
 );
}

export default ProductListPage;