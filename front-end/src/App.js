
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import CourseApp from "./Course/Course";
import React from "react";
import CourseDetails from "./Course/courseDetails";
import CourseEdit from "./Course/courseEdit";
import CourseList from "./Course/courseList";
import CourseAccess from "./Course/courseAccess";

import './App.css';
const styling={
  marginTop:"0%",
  display:"inline",
  backgroundColor:"blue"
}
const styling1={
  marginTop:"0%",
  
  
}



function App() {
 
  return (
    <Router>
      <div style={styling}>
      <header>
        <nav>
        
          <ul>
            <div id="col">
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Course Registration</Link>
            </li>
           
            <li>
              <Link to="/courselist">courselist</Link>
            </li>
         
        
            </div>
          </ul>
          <hr/>

        </nav>
        </header>


        <div style={styling1} >  
        <Routes>
        <Route path="/courseedit" element={<CourseEdit />}/>
        <Route path="/course" element={<CourseApp />}/>
          <Route path="/courselist" element={<CourseList />}/>
          <Route path="/courseaccess" element={<CourseAccess />}/>
          <Route path="/courseedit/:id" element={<CourseEdit/>}/>
          <Route path="/coursedetails/:id" element={<CourseDetails />}/>
          <Route path="/coursedetails" element={<CourseDetails />}/>
       
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;