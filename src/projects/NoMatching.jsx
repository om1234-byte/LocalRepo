import React from "react";
import image from "./notFound.png"

function NoMatch({text}){
    return <>
    <div className="text-red-600 font-bold bg-indigo-500 p-2 m-2 text-center ">
       {text}
       <div>
        <img className="w-1/2 mx-auto" src={image} alt="not found"   />
        </div>
    </div>
    </>;
}

export default  NoMatch;
