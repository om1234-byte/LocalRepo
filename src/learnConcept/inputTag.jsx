import { useField } from "formik";
import React from "react";

function Input({name,id,label,className,...rest}){
 const field =useField(name);                //useField is a hook from Formik which will take out context data of Formik ,exctaly return the useContext function but
                                           // return the data of that particular context of input whose name is passed in useField
 console.log(name,field);
 const [data,meta] = field;                 // destructuring the data and meta from field ,data will contain the value of input and meta will contain the error and touched etc other properties eg. meta data

const{value,onBlur,onChange}=data;
const {error,touched}= meta;


let errorClass="border-gray-300 focus:border-indigo-500";
if(error && touched){
   errorClass="border-red-400";
}

   return(<>
    <label htmlFor={id} className="sr-only">
        {label}
    </label>
    <input
    id={id}
    name={name}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
    
    {...rest}                  // it contain type ,placeholder,required etc and other attributes which are passed in Input component as props expect which is passsed by Formik and are already called by thier name above eg name id which are already destructured
    className={"relative block w-full appearance-none rounded-md border  px-3 py-2 text-gray- placeholder-gray-500     focus:z-10 focus:outline-none focus:ring-indigo-500 sm:text-sm" + className + " " + errorClass}
    />
    {touched && error && <div className="text-red-600">{error}</div>}
    </>
   );
}
export default Input;