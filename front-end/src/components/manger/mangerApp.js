import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import Login from "../../Login";
import { CourseEnquiryViewManger } from "./CourseEnquiryView";
import { CourseViewManger } from "./CourseView";
import { HomeManger } from "./home";
import { ResourceEnquiryViewManger } from "./ResourceEnquiryView";
import ViewResourcesManger from "./ResourceView";

export function ManagerApp() {
  return (
    <>
      <Router>
        <div><Link to="/manager">Home</Link></div>
        <div><Link to="/course">Course</Link></div>
        <div><Link to="/courseenquiry">Course Enquiry</Link></div>
        <div><Link to="/resourse">Resource</Link></div>
        <div><Link to="/resourceenquiry">Resource Enquiry</Link></div>
        {localStorage.getItem('mytoken') && <div><Link onClick={() => window.location = '/login'} to="/login">Logout</Link></div>}

        <Routes>
          <Route path="/manager" element={<HomeManger />} />
          <Route path="/course" element={<CourseViewManger />} />
          <Route path="/courseenquiry" element={<CourseEnquiryViewManger />} />
          <Route path="/resourse" element={<ViewResourcesManger />} />
          <Route path="/resourceenquiry" element={<ResourceEnquiryViewManger />} />
          <Route path="/login" element={<Login />} />


        </Routes>
      </Router>
    </>
  );
}
