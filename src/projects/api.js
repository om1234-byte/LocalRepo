
import axios from "axios"
function getProductList(){
    console.log('get Product Data is running');
    return axios.get("https://dummyjson.com/products").then(function(response){
        console.log("list:",response);
        return response.data.products;
    });                //this is called promise ,data will fetch from the server till
                                                                      // a token is passed

}
export function getProductData(id){
    return axios.get("https://dummyjson.com/products/" + id).then(function(response){
         console.log("single",response);
         return response.data;
    });
}


export default getProductList;