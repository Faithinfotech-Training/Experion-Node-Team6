
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import CourseApp from "./Course/course";
import React, { useEffect } from "react";

import CourseDetails from "./Course/courseDetails";
import CourseEdit from "./Course/courseEdit";
import CourseList from "./Course/courseList";
import CourseAccess from "./Course/courseAccess";
import CreateResource from "./Resources/CreateResource";
import Home from "./Course/Home";
import './App.css';
import ViewResources from "./Resources/ViewResources";
import ReactGA from 'react-ga';
const styling={
  marginTop:"0%",
  display:"inline",
  backgroundColor:"blue"
}
const styling1={
  marginTop:"0%",
  
  
}


function App() {
  useEffect(()=>
{
  ReactGA.initialize('UA-214024739-1')

  ReactGA.pageview(window.location.pathname + window.location.search)
},[])

useEffect(() => {
  console.log(window.location.pathname)
 })
 
  return (
    <Router>
      <div style={styling}>
      <header>
      <nav class="navbar navbar-dark bg-dark">
        
          <ul>
            <div id="col">
           <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/course">Create Course</Link>
            </li>
           
            <li>
              <Link to="/courselist">View Course</Link>
            </li>
            <li>
              <Link to="/resource/create">Create Resource</Link>
            </li>
            <li>
              <Link to="/resource/view">View Resources</Link>
            </li>
         
        
            </div>
          </ul>
          <hr/>

        </nav>
        </header>


        <div className="container" style={styling1} >  
        <Routes>
          <Route path="/"element ={<Home/>}/>
          <Route path="/courseedit" element={<CourseEdit />}/>
          <Route path="/course" element={<CourseApp />}/>
          <Route path="/courselist" element={<CourseList />}/>
          <Route path="/courseaccess" element={<CourseAccess />}/>
          <Route path="/courseedit/:id" element={<CourseEdit/>}/>
          <Route path="/coursedetails/:id" element={<CourseDetails />}/>
          <Route path="/coursedetails" element={<CourseDetails />}/>
          <Route path="/resource/create" element={<CreateResource />}/>
          <Route path="/resource/view" element={<ViewResources />}/>
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;