import React from "react";
import { Link } from 'react-router-dom'
function CourseAccess(props) {
    console.log(props)


  
    return (
    <>
   <div >
    <h4>{props.details.course_name}</h4>
    <Link to={`/coursedetails/${props.details.id}`}> view details</Link>
    
    </div>
    </>
    
    );
    }
    

export default CourseAccess;

//<h4>{props.details.last_name}</h4>
    //<p>{props.details.email}</p>
    //<p>{props.details.mobile_no}</p>
    //<p>{props.details.date_of_joining}</p>