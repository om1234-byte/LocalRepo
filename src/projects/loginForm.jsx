import React, { useState } from "react";




function LoginForm(){


const[email,setEmail] = useState('');
const[password,setPassword]=useState('');

function callLoginApi(event){
    event.preventDefault();                     //prevent direct default submit of form tag by pressing enter
   
    console.log("send data",email,password);             
}
function emailHandle(event){
    setEmail(event.target.value);
}
function passwordHandle(event){
    setPassword(event.target.value);
}
 //browser validation work only when form is submitted using onSubmit attribte
    return(
     <div className="h-screen flex justify-center bg-white items-center">
        <form onSubmit={callLoginApi} className=" flex flex-col items-center py-2 px-2 bg-gray-300">  
        <div className="w-60 flex flex-col py-2">
            <label>user email</label>
            <input
            type="email"
            required
            placeholder="Type Email"
            value={email}
            id="email"
            onChange={emailHandle}
            className="border  rounded-md text-sm"
            />
            <label>user password</label>
            <input
            
            type="password"
            placeholder="Type Password"
            required
            value={password}
            id="password"
            onChange={passwordHandle}
            className="border  rounded-md text-sm"
            />
        
        </div>
        <button  className="self-end bg-violet-600 rounded-sm py-1 text-sm text-emerald-400 px-2">save changes</button>
        </form>

     </div>
    );
}

export default LoginForm;



//onBlur arrribute used to do similar function as done by onClick attribute but it work when focus is removed.