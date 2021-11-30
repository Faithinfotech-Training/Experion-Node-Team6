import { useState } from "react";
import axios from "axios";
import '../courseStyles.css'

function CourseEnquiryForm() {
    const [inputs, setInputs] = useState({});
    function handleChange(event) {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        //to prevent default html form submit behaviour

        event.preventDefault();
        inputs.status = "not attended"
        //alert the current state
        console.log(inputs);

        /*
        
        */
        axios
            .post('http://localhost:5001/course_enquirys', inputs)
            .then(response => {
                console.log('promise fulfilled')
                console.log(response)
                setInputs(response.data)
                window.location = '/thanks'
            })
    }

    //rendering components

    return (
        <>
            <div className='regform '>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <label>Course ID : </label>
                        <input type="number" name="courseId"
                            value={inputs.courseId || ""}
                            onChange={handleChange} />
                    </div>
                    <div>
                        <label>Name : </label>
                        <input type="text" name="enquirer_name"
                            value={inputs.enquirer_name || ""}
                            onChange={handleChange} />

                    </div>
                    <div>
                        <label >Email : </label>
                        <input type="email" name="enquirer_email"
                            value={inputs.enquirer_email || ""}
                            onChange={handleChange} />

                    </div>
                    <div>
                        <label >Mobile No : </label>
                        <input type="tel" name="enquirer_phone" pattern="^\d{3}-\d{3}-\d{4}$" required
                            value={inputs.enquirer_phone || ""}
                            onChange={handleChange} />
                    </div>

                    <div>
                        <input className='submit' type="submit" value="Submit" />
                        <input className='reset' type="reset" name='clear' value="Clear" />
                    </div>
                </form>
            </div>


        </>
    )

}

export default CourseEnquiryForm;