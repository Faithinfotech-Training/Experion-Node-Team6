import { useState, useEffect } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/react-toastify.esm'
import { confirmAlert } from 'react-confirm-alert';


function Login() {
    toast.configure()
  localStorage.clear();
  return (
    <>
      {/* <h1>Please Login</h1> */}
      <MyForm />
    </>
  );
}

function MyForm(props) {
  //initialize useState with emtpy {} and it will return 2 values,
  //The current state, and a function that updates the state.
  const [inputs, setInputs] = useState({});

  function handleChange(event) {
    //during change of every element.
    //save name in 'name' and its value in value
    const name = event.target.name;
    const value = event.target.value;
    // setInputs is the function that updates the state.
    setInputs((values) => ({ ...values, [name]: value }));
  }

  function handleSubmit(event) {
    //to prevent default html form submit behaviour
    event.preventDefault();
    //alert the current state
    console.log(inputs);

    axios
      .post("http://localhost:3005/login", inputs) //connection url with backend
      .then((response) => {
        //alert(response.data.user.id)
        //alert(response.data.accessToken)
        localStorage.setItem("mytoken", response.data.accessToken);
        localStorage.setItem("role", response.data.user.role);
        if (response.data.user.role === "admin") window.location = "/admin";
        else if (response.data.user.role === "manager")
          window.location = "/manager";
      })
      .catch((error) => {
        toast.error(error.response.data,{position:toast.POSITION.TOP_CENTER})
        console.log(error.response.data)
        localStorage.clear();
        // toast.success("Enquiry Submitted successfully");

        //alert("got error with no data")
        if (error.response) {
        //   alert(error.response.data); // => the response payload
        //   ()=>{toast.success(error.response.data)}
          
        //   confirmAlert({
        //     title: error.response.data,
        //     message: error.response.data,
        //   })
         }

      });
  }

  return (
    <>
      {/* <form className="regform" onSubmit={handleSubmit}>
        <div>
          <div className="formrow">
            <label>
              {" "}
              User Email:
              <input
                type="email"
                name="email"
                value={inputs.email || ""}
                onChange={handleChange}
                required
              />
              <br /> <br />
            </label>
          </div>
          <div className="formrow">
            <label>
              {" "}
              Password:
              <input
                type="password"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                required
              />
              <br /> <br />
            </label>
          </div>

          <input className="submit " type="submit" />
        </div>
      </form> */}




      <div className="content mt-3 ">
        <div className="container  pt-3 ">
          <div className="row">
            <div className="col-md-6 order-md-2">
              <img
                src="https://m.foolcdn.com/media/the-blueprint/images/GettyImages-1245953309.original.jpg" 
           
                alt="Image"
                className="img-fluid"
              />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3 className="fs-2">
                      Sign In to <strong>CRM</strong>
                    </h3>
                    <p className="mb-4 fs-5">
                      Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                      consectetur adipisicing.
                    </p>
                  </div>
                  <form action="#" onSubmit={handleSubmit}>
                    <div className="form-group first">
                      <label className=" fs-5">Username</label>
                      <input
                       
                        className="form-control "
                        type="email"
                        name="email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                        required                    />
                    </div>
                    <div className="form-group last mb-4 fs-5">
                      <label for="password">Password</label>
                      <input
                        type="password"
                        className="form-control "
                         name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                required
                      />
                    </div>
                
                    <input
                      type="submit"
                      value="Log In"
                      className="btn text-white btn-block btn-primary mb-4"
                   
                    />
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
