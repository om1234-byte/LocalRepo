   import React from "react";
  import LecturePage from './LecturePage';
import AssignmentPage from './AssignmentPage';
import { Route,Routes,Link } from "react-router-dom";

   
                                                     // side bar using router
    
function Side_bar_R(){
  return (<>
  <div className='flex'>
    <div className='w-80 h-screen bg-yellow-400 flex flex-col space-y-3'>
      <Link to='/AssignmentPage' className="text-indigo-700">Assignment Page</Link>
      <Link to='/LecturePage' className="text-indigo-700" >Lecture Page</Link>
    </div>
     <Routes>
        <Route path="/AssignmentPage" element={<AssignmentPage/>}></Route>
        <Route path="/LecturePage" element={<LecturePage/>}></Route>
     </Routes>
       
  </div>
    
  </> );

}

export default Side_bar_R;