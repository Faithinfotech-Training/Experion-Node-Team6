/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
/*
import { Component } from "react";

class App extends Component {
  render(){
    return(<div>
      <p>Hello World</p>
    </div>);
  }
}

export default App;
*/

//import reactDom from "react-dom";
/*
function App()
{
  const a=50;
  const b=50;
  var name= "ravi";
  var large_red = {
    fontSize: 120,
    color: '#FF0000',
   

  }
console.log("sending message to condole");
 return (
           <footer>
            <p style={large_red}>Hello{name} : {a+b}</p>
            <p>{a >=50 ? 'a > 50' : 'a<50'}</p>
          </footer>
        )
}



import Head from './myFnpage';

function App(){
  return(<>
  <Head/>

  </>
  )
}

import { BrowserRouter as Router, Routes, Route, Link }from "react-router-dom";
//importing all the components

import Home from './Home';
import Contact from './Contact';
import About from "./About";
import StaffApp from "./StaffReg";

function App()
{
  return ( <MyRouter/>);
  //return(<p>new</p>);
}

function MyRouter()
{
  return (
    <Router>
      <h1>CRM System</h1>
      <h3> Lorem ipsum thing</h3>
      <div><Link to="/">Home</Link></div>
      <div><Link to="/about">about</Link></div>
      <div><Link to="/contact">Contact</Link></div>
      <div><Link to="/staffreg">StaffApp</Link></div>
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        <Route path="/staffreg" element={<StaffApp />}/>

      </Routes>
    </Router>
  );
}

*/
import {BrowserRouter as Router,Routes, Route, Link} from "react-router-dom"
import React from "react";
import CourseApp from "./Course/Course";
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
          
          <Route path="/course" element={<CourseApp />}/>
          <Route path="/courseedit" element={<CourseEdit />}/>
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