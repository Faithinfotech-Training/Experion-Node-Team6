import { BrowserRouter as Router, Routes, Route, Link }
  from "react-router-dom";
import About from "./CourseEnquiry/About";
import ThankYou from "./CourseEnquiry/ThankYou";
import CourseEnquiryForm from "./CourseEnquiry/CourseEnquiryForm";
import CourseEnquiryList from "./CourseEnquiry/CourseEnquiryList";
import CourseEnquiryDetails from "./CourseEnquiry/CourseEnquiryDetails";
import EditCourseEnquiry from "./CourseEnquiry/EditCourseEnquiry";
import AdminLanding from "./CourseEnquiry/AdminLanding";
import Login from "./Login";
import ManagerLanding from "./CourseEnquiry/ManagerLanding";
import './courseStyles.css'
import Home from "./CourseEnquiry/Home";


function App() {
  return (
    <MyRouter />
  );
}
function MyRouter() {
  return (
    <Router>
      <div className='navbar'>


        <div><Link className="Link" to='/'>Home</Link></div>
        <div><Link className="Link" to='/about'>About</Link></div>
        {!localStorage.getItem('mytoken') && <div><Link className="Link" to='/courseenquiry'>Course Enquiry Form</Link></div>}
        {localStorage.getItem('mytoken') && <div><Link className="Link" to="/courseenquirylist">Course Enquiry List</Link></div>}
        {/* <div><Link to ='/courseenquirylist'>View Course Enquiry List </Link></div> */}
        {!localStorage.getItem('mytoken') && <div ><Link className="Link" to="/login">Login</Link></div>}
        {localStorage.getItem('mytoken') && <div><Link className="Link" onClick={() => window.location = '/login'} to="/login">Logout</Link></div>}

        <div></div>

      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/courseenquiry" element={<CourseEnquiryForm />} />
        <Route path="/courseenquirylist" element={<CourseEnquiryList />} />
        <Route path="/courseenquirydetails/:course_enquiryId" element={<CourseEnquiryDetails />} />
        <Route path="/courseenquiryupdate/:course_enquiryId" element={<EditCourseEnquiry />} />
        <Route path="/admin" element={<AdminLanding />} />
        <Route path="/manager" element={<ManagerLanding />} />

        <Route path="/login" element={<Login />} />

        <Route path="/thanks" element={<ThankYou />} />
      </Routes>

    </Router>);
}

export default App;
