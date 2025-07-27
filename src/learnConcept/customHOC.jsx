import React from "react";
import {useField} from "formik";

// this is a custom HOC which will take the incoming component and return a new component with all the formik context data
//it will return a outgoing component which you can recevie from any name and will take the name and rest other props which is needed in incoming tag
//it will recevie formik data through context and add it to incoming tag  and return it .
//since it add context data so from whatever name you receie outgoingcomponent tag .ensure it is used inside Formik tag


 


function customHOC(IncomingComponent){
    function OutgoingComponent({name,...rest}){
    
        const field = useField(name);              //return data of particular field tag whose name is pased

        console.log(name,field)
        const[data,meta] =field;
        const {value,onChange,onBlur} =data;
        const {error,touched,reset} =meta;
         
       
       
      return<>
       <IncomingComponent
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error ={error}
        touched={touched}
        name={name}
        {...rest}
        />
      </>
      
    }
    return OutgoingComponent;
}
 


export default customHOC;