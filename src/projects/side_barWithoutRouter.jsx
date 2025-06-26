   import React from "react";
  import LecturePage from './LecturePage';
import AssignmentPage from './AssignmentPage';
   
                                                                    // side bar without using router by shortsircuiting
    const path = window.location.pathname;
function Side_bar(){
  return (<>
  <div className='flex'>
    <div className='w-80 h-screen bg-yellow-400 flex flex-col space-y-3'>
      <a href='/AssignmentPage' >Assignment Page</a>
      <a href='/LecturePage' >Lecture Page</a>
    </div>
       {console.log("path is",path)}
       { path == '/AssignmentPage' && <AssignmentPage/>}
          { path == '/LecturePage' && <LecturePage/>}
  </div>
    
  </> );

}

export default Side_bar;