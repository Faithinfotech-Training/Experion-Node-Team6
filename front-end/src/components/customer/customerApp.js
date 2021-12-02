import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import React from "react";
import Home from "../../CourseEnquiry/Home";
import About from "../../CourseEnquiry/About";
import ThankYou from "../../CourseEnquiry/ThankYou";
import Login from "../../Login";
import ViewCourse from "./viewCourse";
import ViewCourseDetails from "./detailCourseView";
import CourseEnquiryForm from "../../CourseEnquiry/CourseEnquiryForm";
import ViewResource from "./viewResource";
import ViewResourceDetails from "./detailResourceView";

function CustomerApp(){
    return(
        <>
<Router>
<div><Link  to='/'>Home</Link></div>
<div><Link  to='/about'>About</Link></div>
<div ><Link  to="/viewcourse">Courses</Link></div>
<div ><Link  to="/viewresource">Resources</Link></div>

<div ><Link  to="/login">Login</Link></div>



<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/thanks" element={<ThankYou/>} />
<Route path="/login" element={<Login />} />
<Route path="/viewcourse" element={<ViewCourse />} />
<Route path="/viewresource" element={<ViewResource />} />

<Route path="/detailcourseview/:id" element={<ViewCourseDetails />} />
<Route path="/detailresourceview/:resource_id" element={< ViewResourceDetails />} />

<Route path="/courseenquiry" element={<CourseEnquiryForm />} />




</Routes>
</Router>
        </>
    )

}

export default CustomerApp;