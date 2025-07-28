import React from "react";
import customHOC from "./customHOC";

 function FancyInput({name , label, id, className, errors,value, touched,...rest}){
    
            
    let errorClass="border-gray-300 focus:border-indigo-500";
    if(errors && touched){
     errorClass=" border-2 border-red-400";
    }

   return(<>
    <label htmlFor={id} className="sr-only">
        {label}
    </label>
    <div className={"p-1 rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 " + " " + className }>
    <input
    id={id}
    name={name}
    value={value ?? ""}
  
    {...rest}                  // it contain type ,placeholder,required etc and other attributes which are passed in Input component as props expect which is passsed by Formik and are already called by thier name above eg name id which are already destructured
    className={"relative block w-full bg-white appearance-none rounded-md  border px-3 py-2 text-gray- placeholder-gray-500     focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-sm" + " " + errorClass}
    />
    </div>
    {touched && errors && <div className="text-red-600">{errors}</div>}
    </>
   );
}
export const FormikFancyInput =  customHOC(FancyInput);      //it return the outgoing component define in customHOC function ,so whenever FormikFancyInput is used outgoing component will be called.

export default FancyInput;                 //it export the normal fancyinput commponent
// this is a higher order component which will take the FancyInput component and return a new component with all the formik context data
//it will be used in FancyInput component to get the formik context data and pass it to the FancyInput component as props