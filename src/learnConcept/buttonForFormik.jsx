 import { useFormikContext } from "formik";

function Button(){             // to use resetForm function we need to import resetForm from fuction from context data of formik and for this this component must be a children of it hence 
    // we make a separate function for button make it a formik children and then we get access of formik context data,and able to use resetForm function 
  
  
     const{resetForm, isValid, dirty} = useFormikContext();   //it will return all the data of formik context .so we can call and use any function
   
       console.log("isValid:",isValid,"dirty:", dirty);
     return(
     <>
    
     <button type="submit" disabled={!isValid || !dirty} className="self-end bg-violet-600 rounded-sm py-1 text-sm text-white disabled:bg-violet-500 px-2">save changes</button>
    <button type="button" onClick={resetForm} className="self-end m-1 bg-violet-600 rounded-sm py-1 text-sm text-white px-2">reset</button>
    </>
    );
}
export default Button;