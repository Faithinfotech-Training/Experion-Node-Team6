import { useState, useEffect } from "react";
import axios from 'axios';
import {useParams} from "react-router-dom";

function CourseEdit(){
const {id}=useParams();
return (<>
<h1>Course Edit</h1>
<MyForm id={id}/>
</>);
}

function MyForm(props) {
   /* const mystyle={
        maxWidth: "500px",
        margin: "auto",
        background: "white",
        padding: "10px",
        borderStyle:"solid",
        backgroundColor:"orange",
    }*/
    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});

    useEffect(()=> {
        axios
        .get(`http://localhost:5001/course/${props.id}`)
        .then(response => {
        console.log('promise was fullfilled')
        console.log(response)
        setInputs(response.data)
        })
        },[]);

    function handleChange(event){
    //during change of every element.
    //save name in 'name' and its value in value
    const name = event.target.name;
    const value = event.target.value;
    // setInputs is the function that updates the state.
    setInputs(values => ({...values, [name]: value}))
    }
    function handleSubmit(event) {
        //to prevent default html form submit behaviour
        event.preventDefault();
        //alert the current state
        console.log(inputs);
        axios
        .put(`http://localhost:5001/course/${props.id}`,inputs)
        .then(response => {
            console.log('Promise was fulfilled')
            console.log(response)
            alert("the user details are updated");
        })
        window.location=`/coursedetails/${props.id}`

        }
        return (
            <div  className="d-flex justify-content-center" >
            <form className="row col-md-6 g-3 needs-validation" onSubmit={handleSubmit}>
            <table >
            <tr>
            <th>
            
            
                
            <label>Course name:
                     <input type="text" name="course_name"
                        value={inputs.course_name || ""}
                        onChange={handleChange}
                        required
                    />
                </label>
                </th>
                </tr>
            
            
            <tr>
            <th>
            <label>Description:
            <th>
                     <textarea name="description"
                        value={inputs.description || ""}
                        onChange={handleChange}
                        required
                    />
                    </th>
                </label>
                </th>
                </tr>
          
                 
             <tr>
             <th>
                <label>Course_fee:
        
                        <input type="text" name="course_fee"
                        value={inputs.course_fee || ""}
                        onChange={handleChange}
                        required
                        
                        />
                   
                </label>
                 </th>
                
                 </tr>
                 <tr>
                 <th>
                          <label>total_seat:
                          <input type="text" name="total_seat"
                        value={inputs.total_seat || ""}
                        onChange={handleChange}
                        required
                        
                        />
                        
                </label>
                </th>
                 </tr>
                 <tr>
                 <th>
                  <label for="validationCustom01" className="form-label">available_seat:
                  <input type="text" name="available_seat"
                        value={inputs.available_seat || ""}
                        onChange={handleChange}
                        required
                        
                        />
                    </label>
                    </th>
                     </tr>
                
                 <tr>
                 <th>
                <input type="submit" />
                </th>
                 </tr>
                </table>

            </form> 
            </div>
        )
}
export default CourseEdit;