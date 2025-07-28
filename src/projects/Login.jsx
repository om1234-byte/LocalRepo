

function LoginInputTag({
    onChange,
    errors,
    values,
    touched,
     onBlur,
    id,
    label,
    className,
    ...rest
})

{
    
    let errorClass=""
if(errors){
     errorClass="border-red-200 text-red-600 "
         }

    return (<>
       <label htmlFor={id} >{label}</label>
        <input id={id} {...rest} onChange={onChange} onBlur={onBlur} className={"transparent inset border-2 bg-transparent border-x-0 border-t-0 border-white  "+errorClass+" "+className}/>
      {touched && errors && <div className="text-red-600">{errors}</div>}
    </>)
}



export default LoginInputTag;