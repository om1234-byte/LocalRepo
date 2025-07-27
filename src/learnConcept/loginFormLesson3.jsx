/*In this file we use in built formik component for all the work  which we did in
previous two login form built by differnt approches of Formik
In this we use "" , it is built in function which take input and return Hoc we can build login form in single page
  */

import React, { useState } from "react";
import { withFormik} from "formik";
import * as Yup from "yup";  


import FancyInput from "./fancyInput(HOC)connected";

function callLoginApi(values){
    console.log("send data",values.email,values.password);             
}
const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password:Yup.string().min(6,"Minimum 6 character required").required(),

})                                                                         


   const initialValues = {
        email: "",
        password: "",
   }


export function LoginForm3({                   //return these data from myHoc
    handleSubmit,
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    isValid,
    dirty,
    resetForm,
}){
 

    
 return(
    
                                                 
     <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className=" flex flex-col items-center py-2 px-2 bg-white">   

            <h1 className="text-2xl font-bold self-center mb-4">Login to SwedCart</h1>
        <div className="w-60 flex flex-col py-2">
            
            <FancyInput
            value={values.email}
            errors={errors.email}
            touched={touched.email}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Enter Email"
            type="email"
            name="email"
            placeholder="Type Email"
            
            id="email"
            autoComplete="username"
            className=" rounded-b-none "
            required
            />

        
            <FancyInput
            value={values.password}
            errors={errors.password}
            touched={touched.password}
            onChange={handleChange}
            onBlur={handleBlur}
            label="Enter Password"
            type="password"
            placeholder="Type Password"
            name="password"
            
            id="password"
            required
            autoComplete="current-password"
            className=" rounded-t-none "
            />
           
        

        </div>
        <button type="submit"  disabled={!isValid || !dirty} className="self-end bg-violet-600 rounded-sm py-1 text-sm text-white disabled:bg-violet-500 px-2">save changes</button>
        <button type="button" onClick={resetForm} className="self-end m-1 bg-violet-600 rounded-sm py-1 text-sm text-white px-2">reset</button>
    
        
        </form>

     </div>
   
 );
}
const myHOC = withFormik({                      //return inbuilt hoc which automatically fill the data from formik context 
     initialValues: initialValues,         
     handleSubmit:callLoginApi,
     validationSchema:schema,
     validateOnMount:true,
                
   
 });

 

const EasyLogin = myHOC(LoginForm3);
export default EasyLogin;


//to use this login form paste this inside the app.jsx router tag
//<Route path="/loginform3" element={<LoginForm3/>}/>  or
//<Route path="/loginform3" element={<EasyLogin/>}/> as both are importable
//then change the respective url