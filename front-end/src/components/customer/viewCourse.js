import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";

//import CourseAccess from './courseAccess';




function ViewCourse() {

    const st = {
       // display:"inline",
        // align:"center",
        // marginTop:"0%",
        //marginLeft:"50%",
        borderStyle: "solid",
        backgroundColor: "white",
        padding: 10,
        margin: 10,
        float: 'left',
        //width: "20%",
        //marginTop: "5%",
        listStyleType: "none"


    }
    var img_style ={
        height:200,
        width:200
    }
    //initialize the usestate to empty
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        console.log('The use effect has been executed');

        axios
            .get('http://localhost:5001/course')
            .then(response => {
                console.log('Promise was fulfilled')
                console.log(response)
                setCourses(response.data)
            })

    }, [])

    return (
        <>
            <div >

                <h1 style={{ marginTop: "2%", textAlign: "center" }}> Courselist </h1>
                <div >
                   

                        {courses.map(course =>
                            <div key={course.id} >
                                <div style={st} >
                                    <img style={img_style} src={course.thumbnail} />
                                    <h4>{course.course_name}</h4>
                                    <Link to={`/detailcourseview/${course.id}`}> view details</Link>
                                    <br />

                                </div>
                                <br />
                            </div>)}

                    
                </div>
            </div>
        </>
    );
}

export default ViewCourse;




