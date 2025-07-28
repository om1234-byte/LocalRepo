 import React from "react";
import Tablerow from "./tablerow";
 import { useState } from 'react';
 
 function Table(){
      const state = useState(2);     // create array and once intiate with 2 and give the key(save data against key i.e rollno)
      const num= state[0];           //value of num store
      const updateNum= state[1];    // function to update num
     // arry destructuring  const[num,updateNum] = useState(2);
      
  
 

     const[upto,updateUptoNum]=useState(10);
    
          function handleNumChange(event){
     console.log('input table');
     
      const newNum= +(event.target.value);
      
     updateNum(newNum);    //inform react about any change in code and rerun the file code
      }
      function handleUptoChange(event){
     console.log('upto table');
     
      const UptoNum= +(event.target.value);
      
     updateUptoNum(UptoNum);    //inform react about any change in code and rerun the file code
      }

      const row=[];
      for(let i = 1;i<=upto;i++){
       row.push(<Tablerow number={num} index={i}/>)
  }

    return (
    <>
    <div className="pd-2">
      <div className="flex flex-col">
     {num>20 && <div className="border border-amber-600 mt-1">Nice! you reached to {num}.</div>}
     <input
     onChange={handleNumChange} 
     className="border border-gray-700 rounded-md mt-2"
     value={num}/>
     <input
     onChange={handleUptoChange} 
     className="border border-gray-700 rounded-md "
     value={upto}/>
     </div>
     {row}
         </div>
     </>
      )
 }
  export default Table;



  const a=[10,20,30,40,50];
  const b=a.filter(function(item){
     return item<25;
  });
 console.log('b',b);
 const c=a.map(function(item){
     return item<25;
 });
 console.log('c',c);