import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

export function ResourceEnquiryRegistration() {
  return (
    <>
      <MyForm />
    </>
  );
}

function MyForm() {
  const [resourceEnquiryList, setResourceEnquiryList] = useState([]);
  const navigate = useNavigate();
  function handlechange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setResourceEnquiryList((values) => ({ ...values, [name]: value }));
  }
  function handleSubmit(event) {
    event.preventDefault();
    resourceEnquiryList.status = "not attended";
    console.log(resourceEnquiryList);

    axios
      .post("http://localhost:5001/resourceEnquiry", resourceEnquiryList)
      .then((response) => {
        console.log(response);
        window.location = "/";
        setResourceEnquiryList(response.data);
      });
  }
  return (
    <>
      <div className="regbackground">
        <div className="regsidebar">
          <div className="innersidebar">
            <h3 className="h3">library </h3>

            <p className="p">
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley
            </p>
          </div>
        </div>
        <div className="formdiv">
          <form onSubmit={handleSubmit}
          className="regform">
            <h1>Enquiry Registration</h1>
            <div class="formrow">
              <label>Resource Id</label>

              <input
                type="text"
                name="resource_id"
                value={resourceEnquiryList.resource_id || ""}
                onChange={handlechange}
                required
              />
            </div>
            <div class="formrow">
              <label>Enquirer Name</label>

              <input
                type="text"
                name="enquirer_name"
                value={resourceEnquiryList.enquirer_name || ""}
                onChange={handlechange}
                required
              />
            </div>
            <div class="formrow">
              <label>Enquirer Email</label>

              <input
                type="email"
                name="enquirer_email"
                value={resourceEnquiryList.enquirer_email || ""}
                onChange={handlechange}
                required
              />
            </div>
            {/* <div class="formrow">
              <label>Mobile NO</label>

              <input
                type="text"
                name="enquirer_phno"
                value={resourceEnquiryList.enquirer_phno || ""}
                onChange={handlechange}
                required
              />
            </div> */}
            
            <div>
            <input
                className="reset floatRight"
                type="reset"
                value="reset"
                onClick={() => (window.location = "/resourceenquiryregister")}
              />
              <input className="submit floatRight" type="submit" value="submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
