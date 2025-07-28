
import * as Yup from "yup";
import { useContext, useEffect, useState } from "react";
import LoginInputTag from "./Login";
import { withFormik } from "formik";
import image from "../assets/image.png";
import axios from "axios";
import userContext from "../projects/context"; 

import { useNavigate } from "react-router-dom";





const schema = 
Yup.object().shape({
    email: Yup.string().email().required("its mandarory"),
    password:Yup.string().min(6,"Minimum 6 character required").max(12,"max 12 character ").required(),

})    
             
const initialValues = {
    email:"",
    password:"",
}

function apiCall(values,bag){                             //handleSubmit provide us these parameter internally
    console.log("email",values.email,"password",values.password);
    
    if (bag.props.submitted) return; // prevent repeat

    bag.props.setSubmitted(true); // mark as submitted

    axios.post("https://myeasykart.codeyogi.io/login",{
        email: values.email,      //prashant@codeyogi.io
        password:values.password,   //12345678
    }).then((response) => {
        console.log(response.data);
        const {user,token} =response.data;             //in user we get stored data from api and in token we get token from api
        localStorage.setItem("token",token);
        console.log(bag);
        bag.props.setUser(user);


    }).catch( () => {
        console.log("Invalid Credentials");
        bag.props.setSubmitted(false);
    });



}
function LoginWrapper() {
  const [submitted, setSubmitted] = useState(false);
  const { setUser } = useContext(userContext);

  const SendLogin = myHOC(LoginApi);

  return (
    <SendLogin
      submitted={submitted}
      setSubmitted={setSubmitted}
      setUser={setUser}
    />
  );
}





 export function LoginApi({
    
    handleChange,
    dirty,
    errors,
    isValid,
    values,
    handleBlur,
    handleSubmit,
    touched,
    submitted,
    setSubmitted,  // ✅ Add this
   setUser         // ✅ Optional: for clarity if you use it inside
    
}
){

   const { user } = useContext(userContext);
const navigate = useNavigate();
useEffect(function(){ 
    if(user){
      console.log("sendLogin navigte worked");
      navigate('/');
    }
}
,[user])
   
    return <>
       <div>
        <form onSubmit={handleSubmit}>
             <div style={{
            backgroundImage: `url(${image})`, backgroundSize: 'cover',         
  backgroundPosition: 'center',    
  height: '100vh',                  
  width: '100%',
  padding:"20px",
 display:"flex",
 justifyContent:"center",
 alignItems:"center",
        }} >
              
              <div className="w-80 sm:w-xs mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white  ">
                <div className="font-bold text-xl text-white text-center  ">
                    Login
                </div>
                <div className="text-white">
                    <div className="flex flex-col mb-8">
                         <LoginInputTag
                           onChange={handleChange}
                           errors={errors.email}
                          values={values.email}
                          touched={touched.email}
                          onBlur={handleBlur}
                          name="email"
                          id="email"
                          type="email"
                          label="email"
                          placeholder=""
                          className=""
                         
                         />
                    </div>
                     <div className="flex flex-col mb-5">
                           <LoginInputTag
                           onChange={handleChange}
                           errors={errors.password}
                          values={values.password}
                          touched={touched.password}
                          onBlur={handleBlur}
                          name="password"
                          id="Password"
                          type="password"
                          label="Password"
                          placeholder=""
                          className=""
                         
                         />
                    </div>
                   <div className="flex justify-between mb-6">
                    <span>
                         <input type="checkbox" /> 
                    <h3 className="inline">Remember Me</h3>
                    </span>
                   
                    <a>Forget Password</a>
                   </div>
                   
                      <button type="submit" disabled={!isValid || !dirty} className="py-1 rounded-3xl w-full bg-white text-black disabled:bg-gray-400">Log in</button>
                     <h2 className="text-white">Don't have a account <a className="font-bold text-white">Register</a></h2>
                </div>
              </div>
           
                 
              
              </div>
        
        </form>
      
       </div>
    </>
}


const myHOC = withFormik({
  initialValues: {
    email: '',
    password: '',
  },
  validationSchema: schema,
  handleSubmit: apiCall,
});


//const SendLogin =myHOC(LoginApi);
//export default SendLogin;
export default LoginWrapper;
