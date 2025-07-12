import { memo } from "react";
import { TiShoppingCart } from "react-icons/ti";


function NavBar({count}){
      console.log("navbar is called");
    return<>

    <div className="bg-white">
    <div className="h-20    max-w-6xl  flex justify-between items-center p-4 mx-auto">
      
      <img src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-2000.png" className="pl-4  h-16"/>
        <div className="text-center">
          <span >{count}</span>
          <TiShoppingCart className="size-8 -mt-2" onClick={<mycart/>} />
          
          </div>
      </div>
      </div>
    </>
}

export default memo(NavBar);