import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
import '../courseStyles.css'
function EditCourseEnquiry() {



    const { course_enquiryId } = useParams();

    return (
        <>
            <MyForm course_enquiryId={course_enquiryId} />
        </>
    );
}

function MyForm(props) {
    //inline styles
    var submit = {
        fontSize: 25,
        background: 'green',
        color: 'white'
    }
    var submitdiv = {
        float: 'right',
        background: 'green'
    }

    const [enquiry, setCourseEnquiryList] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get(`http://localhost:5001/course_enquirys/${props.course_enquiryId}`)
            .then((response) => {
                setCourseEnquiryList(response.data);
            });
    }, []);

    //On change of Status this function resets the value
    function handlechange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setCourseEnquiryList((values) => ({ ...values, [name]: value }));
    }
    //On submission the values in input field are transferred to back-end for updation
    function handleSubmit(event) {
        event.preventDefault();
        console.log(enquiry);
        axios
            .put(
                `http://localhost:5001/course_enquirys/${props.course_enquiryId}`,
                enquiry
            )
            .then((response) => {
                console.log(response);
                window.location = `/courseenquirydetails/${props.course_enquiryId}`;
                setCourseEnquiryList(response.data);
            });
    }
    return (
        <>
            <div className='regform '>
                <form onSubmit={handleSubmit}>
                    <h1>Enquiry Response Status Updation</h1>
                    <a href='/courseenquirylist'>Back to Enquiry List</a>
                    <div>Course ID : {enquiry.courseId}</div>
                    <div>Enquirer Name: {enquiry.enquirer_name}</div>
                    <div>Enquirer Email: {enquiry.enquirer_email}</div>
                    <div>Enquirer Phone: {enquiry.enquirer_phone}</div>
                    <div>
                        <label>Status : </label>
                        <select name="status" onChange={handlechange}>
                            <option value="Attended"> Select
                            </option>
                            <option value="Attended"> Attended
                            </option>
                            <option value="Not Attended"> Not Attended
                            </option>
                        </select>
                        {/* 
            <input
              type="text"
              name="status"
              value={enquiry.status || ""}
              onChange={handlechange}
              required
            /> */}
                    </div>

                    <div style={submitdiv}>
                        <input style={submit} type="submit" value="submit" />
                    </div>
                </form>
            </div>
        </>
    );
}

export default EditCourseEnquiry;