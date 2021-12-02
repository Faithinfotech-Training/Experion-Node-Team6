import { useState,useEffect } from "react"
import axios from "axios";

export function CourseViewManger(){
    const [course,setcourse]=useState([])
    useEffect(()=>{
        axios
        .get("http://localhost:5001/course")
        .then((response)=>{
            console.log("promise was fullfilled");
            console.log(response);
            setcourse(response.data);
        });
    },[]);
return(<>
<h1>course list </h1>
<div>
            {course.length === 0 ? (<h5>courses not available</h5>) : (
                <table className="table table-striped w-auto">
                <thead>
                    <tr>
                        <th>course Name</th>
                        <th>Details</th>
                        <th>course seats</th>
                        <th>Total seats</th>
                        <th>Available seats</th>

                        
                    </tr>
                </thead>
                <tbody>
                    {
                        course.map(course => {
                            return (
                            <tr className="table-info" key={course.course_id}>
                                <th scope="row">{course.course_name}</th>
                                <td>{course.description}</td>
                                <td>{course.course_fee}</td>
                                <td>{course.total_seat}</td>
                                <td>{course.available_seat}</td>

                                
                            </tr>
                            )
                        })
                    }
                   
                    
                </tbody>
    
    
                </table>
            )}
            
        </div>
</>)

}