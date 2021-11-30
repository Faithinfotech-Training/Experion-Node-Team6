import { useState } from "react";
import axios from 'axios';
function CourseApp(){
return (<>
<MyForm />
</>);
}

function MyForm() {
    const mystyle={
        maxWidth: "500px",
        margin: "auto",
        background: "white",
        padding: "10px",
        borderStyle:"solid",
        backgroundColor:"orange",
     
    }
    //initialize useState with emtpy {} and it will return 2 values,
    //The current state, and a function that updates the state.
    const [inputs, setInputs] = useState({});
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
        .post('http://localhost:5001/course',inputs)
        .then(response => {
            console.log('Promise was fulfilled')
            console.log(response)
            window.location='courselist'
        })

        }
        return (
            <div >
            <form onSubmit={handleSubmit}>
            <table style={mystyle}>
            <tr>
            <th>
            
            
                <label>Course Name:
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
            <label>description:
            <th>
                     <input type="text" name="description"
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
                          <label>course_fee:
                        <input type="number" name="course_fee"
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
                            <label>available_seat:
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
export default CourseApp;