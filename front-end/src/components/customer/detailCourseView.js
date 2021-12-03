import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
import "./courseView.css";
import { useNavigate } from "react-router-dom";
import CourseEnquiryForm from "../../CourseEnquiry/CourseEnquiryForm";

function ViewCourseDetails() {
  //initialize the use case to empty

  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios.get(`http://localhost:5001/course/${id}`).then((response) => {
      console.log("promise was fullfilled");
      console.log(response);
      setCourse(response.data);
    });
  }, []);
  const courseName = course.course_name;
  console.log(courseName);
  return (
    <>
      <div className="container-fluid row">
        <div className="card">
          <section className="py-8">
            <div className="container text-center">
              <img className="img-fluid" src={course.thumbnail} />
              <div className="card-body">
            <h4 className="card-title">{course.course_name}</h4>
            <p className="card-text">{course.description}</p>
          
          </div>
            </div>
          </section>
          {/* <img src={course.thumbnail}/> */}
          {/* <img className="card-img-top thumbnail" src={course.thumbnail} alt="Card image cap"/> */}
         
        </div>
        <div>
          <h1>Details of {course.course_name}</h1>
          <h2>Description : {course.description}</h2>
          <h2>Course Fee : {course.course_fee}</h2>
          {/* <h2>Total Seats : {course.total_seat}</h2> */}
          <h2>Available Seats : {course.available_seat}</h2>
          <button
            className="btn btn-primary btn-sm mx-auto"
            onClick={() => navigate("/viewcourse")}
          >
            Back to Course List
          </button>
        </div>
        <br />
        <br />
        <div>
          {" "}
          <CourseEnquiryForm courseName={courseName} />
        </div>
      </div>

      {/* <button type="button" className="btn btn-primary"
                onClick={(courseName)=>navigate('/courseenquiry')} style={st1}>Place Enquiry</button> */}
      <br />
      <br />
      {/* <button type="button" className="btn btn-primary"
                onClick={()=>DeleteCourse(course.id)} style={st1}>Delete</button> */}
    </>
  );
}

export default ViewCourseDetails;
