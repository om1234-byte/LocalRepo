import React from "react";

function Tablerow({number,index}){
    return (<div className="p-2 text-xl text-indigo-700">{number} x {index} = {number*index}</div>);
}

export default Tablerow;