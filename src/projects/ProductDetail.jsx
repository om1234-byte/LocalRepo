import React ,{memo} from "react";
import { Link } from "react-router-dom";



function ProductDetail(props){                       //product file in class lecture
    const{thumbnail,title,category,price,id,description,dimensions,discountPercentage,images,meta,minimumOrderQuantity,
        rating,returnPolicy,stock,weight
    }=props;   //object destructuring
    
    return( <>
    
    <div className="  max-w-xs" >

        <div className="w-full  bg-gray-300 aspect-square">
         <img className="w-full h-full object-cover " src={thumbnail}/>
        </div>
    
    <h1>{title}</h1>
    <div className="font-bold">{category}</div>
    <div className="flex justify-between">
           <div>${price}</div>
            <Link to ={"/projects/product/" + id}  className="text-red-500">View Detail </Link>
    </div>
 
    </div>   
   
   
    </>);
}

export default memo(ProductDetail);




//meta: {createdAt: '2025-04-30T09:41:02.053Z', updatedAt: '2025-04-30T09:41:02.053Z', barcode: '5784719087687', qrCode: 'https://cdn.dummyjson.com/public/qr-code.png'}
//reviews: (3) [{…}, {…}, {…}]
//shippingInformation,warrantyInformation