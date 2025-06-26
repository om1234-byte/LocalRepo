import {ImSpinner9} from "react-icons/im";


function Loading(){
    return <div style={{"background-color":"#a6f1f7","font-size":"25px",display:"flex","align-items":"center","justify-content":"center"}}>
    <ImSpinner9 className="animate-spin  size-8"/>
    </div>;
}
export default Loading