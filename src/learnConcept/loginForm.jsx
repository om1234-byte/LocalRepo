import React, { useState } from "react";
import {useFormik} from "formik";
import * as Yup from "yup";  //import all the named export functions(eg. string(),email() ) inside an object named Yup
//now we call any validation function by call it like Yup.[function_Name]
//we can use validation rule set eg. Yup.[function1_Name].[function2_Name]...


function LoginForm(){


function callLoginApi(values){
    console.log("send data",values.email,values.password);             
}
const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password:Yup.string().min(7,"baut chota password hai").required(),
})                                                                          // object destructuring below
const  {handleSubmit,values,handleChange,resetForm,errors,handleBlur,touched,isValid,dirty}= useFormik({  //values ,errors are object which store data in the key name email,password and handleChange,handleSubmit are function which perform specific task whenever required
    initialValues: {
        email:"",
        password:"",
    },
    onSubmit:callLoginApi,
    validationSchema:schema,
    //validateOnMount:true,            we can use in place of using attribute dirty
});

 //formik give us attribute handleChange function which store data changes and differniate the data of different input tags by their name atribute
 //so it is neccessary to give name attribute to input tags
 //resetForm is also a built in function of formik which clear the form.similarly others read documntation for defination
 //browser validation work only when form is submitted using onSubmit attribte
    return(
     <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit} className=" flex flex-col items-center py-2 px-2 bg-white">  
        <div className="w-60 flex flex-col py-2">
            <label htmlFor="email" className="sr-only ">user email</label>   
            <input
            type="email"
            name="email"
            placeholder="Type Email"
            value={values.email}
            id="email"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border  rounded-md text-sm mb-1"
            />

             {touched.email && errors.email && <div className="text-red-600">{errors.email}</div>}

            <label htmlFor="password" className="sr-only">user password</label>
            <input
            
            type="password"
            placeholder="Type Password"
            name="password"
            value={values.password}
          
            id="password"
            onChange={handleChange}
            onBlur={handleBlur}
            className="border  rounded-md text-sm"
            />
            {touched.password && errors.password && <div className="text-red-600">{errors.password}</div>}
        
        </div>
        <button type="submit" disabled={!isValid || !dirty} className="self-end bg-violet-600 rounded-sm py-1 text-sm text-white disabled:bg-violet-500 px-2">save changes</button>
         <button type="button" onClick={resetForm} className="self-end m-1 bg-violet-600 rounded-sm py-1 text-sm text-white px-2">reset</button>
        </form>

     </div>
    );
}

export default LoginForm;

//to use this login form paste this inside the app.jsx router tag
//<Route path="/loginform" element={<LoginForm/>}/>
//then change the respective url


//onBlur arrribute used to do similar function as done by onClick attribute but it work when focus is removed.
//we are using a libary named Formik by installing it using npm install formik command .this is to use form tag in better way
//  event.preventDefault();  -  prevent direct default submit of form tag by pressing enter
//htmlFor attribute is used in react jsx in place of for attribute in label tag to connect label to input 
//sr-only classname property hide the text but still readable for screenreaders. 

//we can make a form without using a Formik and other such libraries but it would be difficult and lengthy in react to do it so for 
//ease of work we use formik

//for ease of  validation we use an another framework Yup by running command npm install yup



/*
H.W.
create a good login form 
create a signup form
create a forgotPassword form
and connect all three with each other with the help of Formik
*/