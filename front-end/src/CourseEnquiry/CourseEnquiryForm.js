import { useState } from "react";
import axios from "axios";
import '../ResourceEnquiry/resourcesStyles.css'
import { useNavigate } from "react-router";
import { ToastContainer, toast } from 'react-toastify';

function CourseEnquiryForm(props) {
    const navigate =useNavigate();

    const [inputs, setInputs] = useState({});

    console.log(props.courseName)
    function handleChange(event) {

        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    function handleSubmit(event) {
        //to prevent default html form submit behaviour

        event.preventDefault();
        inputs.status = "pending"
        inputs.previous_status = "pending"
        inputs.course_name=props.courseName
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
                toast.success("Enquiry Submitted successfully");
                setTimeout(() => {
                    navigate("/thanks")
                }, 3000)
               // window.location = '/thanks'
            })
            /**
              toast.success("Resource saved successfully");
                setTimeout(() => {
                    navigate("/resourceList")
                }, 3000)
            })
            .catch((error) => {
                toast.error("Error occured while creating resource. Please try again!!!");
            })
             */
    }

    //rendering components

    return (
        <>
            <div className='regform '>
                <form onSubmit={handleSubmit} action="">
                    <div>
                        <label>Course Name : </label>
                        <input type="text" name="course_name" readOnly
                            value={inputs.course_name || props.courseName}
                             />
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
                        <input placeholder='###-###-####' type="tel" name="enquirer_phone" pattern="^\d{3}-\d{3}-\d{4}$" required
                            value={inputs.enquirer_phone || ""}
                            onChange={handleChange} />
                    </div>

                    <div>
                        <input className='submit' type="submit" value="Submit" />
                        <input className='reset' type="reset" name='clear' value="Clear" />
                    </div>
                </form>
            <ToastContainer />

            </div>


        </>
    )

}

export default CourseEnquiryForm;