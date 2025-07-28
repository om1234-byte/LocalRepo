import { imageLoading } from "./loading";

import { RxCross1 } from "react-icons/rx";
function Input( {
    
    thumbnail,
    title,
    price,
    id,
    val,
    passItemId,
    inputValueChange}){

        console.log("input componrnt is called","titlr is",title,"price is",price);
return<>
<div className="p-4 bg-white max-w-4xl mx-auto">
    <div className=" border max-w-3xl max-h-40 py-3 md:py-10 pr-5 bg-white mx-auto flex">
        <div className="border max-w-20 border-y-0 border-l-0 pr-5 ">
            <img className=" " src={thumbnail} alt= "not found"/>
        </div>
        <div className="flex justify-between w-full p-1 py-2">
            <div className="flex flex-col h-full gap-2 w-1/2">
            <div className="flex justify-between  w-full  ">
            <h1>{title}</h1>    
            </div> 
            <div className="flex w-full justify-between ">
            <span> 
            Price:<p className="inline">{price}</p>
            </span>  
             <span > Quantity:
            <input type= "number" id={id} className="w-10 h-5" value ={val} onChange={inputValueChange}/>
            </span>
            </div>
            </div>
            <div productid={id} onClick={passItemId} className="">
            <RxCross1 className=" text-15 m-6" />
            </div>
           
        </div>
    </div>
    </div>
  </>
}
export default Input;
