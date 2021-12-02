import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
const ViewResourcesAdmin = (props) => {
    const [resources, setResource] = useState([])
    const navigate=useNavigate()
    
    useEffect(() => {
        getAllResources();
    }, []);

    const getAllResources = () => {
        axios.get("http://localhost:5001/resource")
            .then(response => {
                setResource(response.data.data)
            })
            .catch(error => {
                console.log("error")
            });
    }   
    return (
        <div>
            {resources.length === 0 ? (<h5>Resources not available</h5>) : (
                <table className="table table-striped w-auto">
                <thead>
                    <tr>
                        <th>Resource Name</th>
                        <th>Availabilty</th>
                        <th>Satus</th>
                        <th>Rent</th>
                        
                    </tr>
                </thead>
                <tbody>
                    {
                        resources.map(resource => {
                            return (
                            <tr className="table-info" key={resource.resource_id}>
                                <th scope="row">{resource.resource_name}</th>
                                <td>{resource.slot_availability.split("T")[0]}</td>
                                <td>{resource.status}</td>
                                <td>{resource.rent}</td>
                                <td>
                                    <button className="btn btn-outline-primary" onClick={()=>navigate(`/resourceedit/${resource.resource_id}`)} >Edit</button>
                                    <button className="btn btn-outline-danger" onClick={() =>deleteResource(resource.resource_id)}>Delete</button>
                                </td>
                            </tr>
                            )
                        })
                    }
                   
                    
                </tbody>
    
    
                </table>
            )}
            
        </div>
        
        
    )
}
export function deleteResource(id){
    axios.delete("http://localhost:5001/resource/" + id)
        .then((response) => {
            alert("Resource deleted succesfully");
            window.location="/resourceList"
            // getAllResources();
        })
        .catch((error) => {
            console.log("error", error);
        })
}
export default ViewResourcesAdmin;
