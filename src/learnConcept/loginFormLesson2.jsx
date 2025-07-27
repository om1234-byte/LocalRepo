import React, { useState } from "react";
import {Form,Formik} from "formik";
import * as Yup from "yup";  
import Input from "./inputTag";
import { FormikFancyInput } from "./fancyInput(HOC)connected";
import FancyInput from "./fancyInput(HOC)connected";
import Button  from "./buttonForFormik";

function LoginForm2(){

//Advance use of formik with custom input tag ->data send by formik context method to input tag instead of passing by props
 
function callLoginApi(values){
    console.log("send data",values.email,values.password,values.number);             
}
const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password:Yup.string().min(7,"Minimum 6 character required").required(),
    number:Yup.string().matches(/^\d{10}$/,"number must be exactly 10 digits").required("number is required"),
})                                                                         


   const initialValues = {
        email: "",
        password: "",
        number: ""
    }
 return(
    <Formik                                  //this is a formik component which send the other formik props like handleChange,resetForm,values,errrors,touched,handleSubmit into context which can be used in its children
     initialValues={initialValues}           //this will initalize the form with these values
     onSubmit={callLoginApi} 
     validationSchema={schema}
     validateOnMount={true}
     isInitialValid               //if no validationSchema is provided then it will be false by default
     isInitialDirty={false}
     
     >
                                                  {/*Form is also a formik Hook which do same as html form tag just add a feature that this will automatically take attribute onSubnit= {handleSubmit} from Formik cintext*/}
     <div className="h-screen flex justify-center items-center">
        <Form  className=" flex flex-col items-center py-2 px-2 bg-white">   

            <h1 className="text-2xl font-bold self-center mb-4">Login to SwedCart</h1>
        <div className="w-60 flex flex-col py-2">
            
            <Input
            label="Enter Email"
            type="email"
            name="email"
            placeholder="Type Email"
            
            id="email"
            autoComplete="username"
            className=" rounded-b-none "
            required
            />

        
            <Input
            label="Enter Password"
            type="password"
            placeholder="Type Password"
            name="password"
            
            id="password"
            required
            autoComplete="current-password"
            className=" rounded-t-none rounded-b-none "
            />
           
           <FormikFancyInput
             label="Enter number"
            type="number"
            placeholder="Type Number"
            name="number"
            
            id="number"
            required
            autoComplete="current-number"
            className=" rounded-t-none "
           
           />  {/*it is also a fancy input tag in reality but passed through HOC so its name changed to formikfancyinput and it has all the formik context data so all the validation function are functioning in it   */}
           
            
        { /*     <FancyInput
             label="Enter number"
            type="number"
            placeholder="Type Number"
            name="number"
            
            id="number"
            required
            autoComplete="current-number"
            className=" rounded-t-none "
           />
           it is fancy input tag without HOC,hence whithout formik context data
            */}
      {/*we can use both the tag where we want normal input without validation we use FancyInput or if we want with validation FomikFancyInput tag is used */}
            

        </div>
             
         <Button/>
        </Form>

     </div>
     </Formik>
 )
}

export default LoginForm2;


//to use this login form paste this inside the app.jsx router tag
//<Route path="/loginform2" element={<LoginForm2/>}/>
//then change the respective url