import { memo } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { VscThreeBars } from "react-icons/vsc";
import { Link } from "react-router-dom";

import { useContext } from "react"
import userContext from "./context"



function NavBar({count}){
      console.log("navbar is called");

 const{setUser}=useContext(userContext);

function Logout(){
    
   
}

    
    return<>

    <div className="bg-white">
    <div className="h-25    max-w-6xl  flex justify-between items-center p-4 mx-auto">
      
      <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png" className="pl-4  h-16"/>
        <div className="text-center flex ">
          
            <Link to="/myCart" >
            <span >{count}</span>
          <TiShoppingCart className="size-8 -mt-2"  />
         
          </Link>
          
          <VscThreeBars onClick={ () =>  {
            setUser("")
              localStorage.removeItem("token");
          }} className="size-8 mt-4 ml-2"/>
          
           
          </div>
      </div>
      </div>
    </>
}

export default memo(NavBar);