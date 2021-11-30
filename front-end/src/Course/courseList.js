import {useState,useEffect} from 'react';
import axios from 'axios';
import CourseAccess from './courseAccess';




function CourseList()
{

    const st={
        //display:"inline",
       // align:"center",
        // marginTop:"0%",
        //marginLeft:"50%",
        borderStyle : "solid",
        backgroundColor:"orange",
        padding:"10px",
        margin:"5px"
    }
    //initialize the usestate to empty
    const [courses,setCourses]=useState([]);
    useEffect(()=> {
        console.log('The use effect has been executed');

        axios
        .get('http://localhost:5001/course')
        .then(response => {
            console.log('Promise was fulfilled')
            console.log(response)
            setCourses(response.data)
        })

    },[])
    
    return(
        <>
        <div>
        
            <p> Courselist </p>
            <div >
            <ul  >
                
                {courses.map(course => 
                    <li key={course.id} style={st}>  
                    <CourseAccess details = {course}/>
                    <br/>
                    </li>)}

            </ul>
            </div>
        </div>
        </>
    );
}

export default CourseList;




