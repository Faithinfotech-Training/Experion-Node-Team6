import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router";
function UpdateResource(props){
    const navigate = useNavigate();
    let {id} = useParams();
    const [formData, setFormData] = useState({
        resource_name: '',
        slot_availability: '',
        status: '',
        rent: 0
    })
    useEffect(()=>{
        getResourceById();
    },[])
    
    const getResourceById = () =>{
        axios.get("http://localhost:5001/resource/"+id)
            .then(response=>{
                console.log(response.data.data);
                const resourceData = response.data.data;
                resourceData.slot_availability = resourceData.slot_availability.split("T")[0];
                setFormData(resourceData);
            })
            .catch(error =>{
                console.log(error);
            })
    }

    const handleFormData = (value, type) => {
        const changeFormData = {...formData};
        changeFormData[type] = value;
        setFormData(changeFormData);
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        axios.put("http://localhost:5001/resource/" + id , formData)
            .then((response) => {
                alert("Resource Updated successfully");
                navigate("/resource/view")
            })
            .catch((error) => {
                alert("error in updating resource");
            })
    }
    return(
        <div className="d-flex justify-content-center">
            <form className="row col-md-6 g-3 needs-validation" 
                onSubmit={handleFormSubmit}
                >
                <div className="col-md-12">
                    <label htmlFor="validationCustom01" className="form-label">Resource Name</label>
                    <input type="text" className="form-control" id="validationCustom01"
                    onChange={(event)=>{handleFormData(event.target.value, 'resource_name')}}
                     value={formData.resource_name} placeholder="Enter Resource name" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustom02" className="form-label">Date </label>
                    <input type="date" className="form-control" id="validationCustom02" 
                     onChange={(event)=>{handleFormData(event.target.value, 'slot_availability')}}
                    value={formData.slot_availability} placeholder="Date" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustom03" className="form-label">Status</label>
                    <input type="text" className="form-control" id="validationCustom03" 
                     onChange={(event)=>{handleFormData(event.target.value, 'status')}}
                    value={formData.status} placeholder="Status" required />
                </div>
                <div className="col-md-12">
                    <label htmlFor="validationCustom04" className="form-label">Rent</label>
                    <input type="text" className="form-control" id="validationCustom04"
                     onChange={(event)=>{handleFormData(event.target.value, 'rent')}}
                    value={formData.rent} placeholder="Rent" required />
                </div>
            
                <div className="col-12">
                    <button className="btn btn-primary" type="submit">Save</button>
                </div>
            </form>
        </div>
        
    )
}
export default UpdateResource;