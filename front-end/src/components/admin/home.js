import { contains } from "jquery";
import { Link } from "react-router-dom";
import { CourseDetailsAdmin } from "./courseDetails";
import { CourseEnquiryViewAdmin } from "./courseEnquiryDetails";
import { CourseRegsiter } from "./courseRegister";
import ViewResourcesAdmin from "./resourceDetails";
import { ResourceEnquiryViewAdmin } from "./resurceEnquiryDetails";


export function HomeAdmin() {
   return (
      <main style={{marginLeft: -75, marginRight: -75, marginTop: -25}}>
  <div class="position-relative overflow-hidden  text-center bg-light" style={{backgroundImage: `url(image.jpg)`, backgroundSize: "contain", color: "white"}}>
    <div class="col-md-5 p-lg-5 mx-auto my-5">
      <h1 class="display-1 fw-normal">Training Academy</h1>
      <p class="lead fw-normal">And an even wittier subheading to boot. Jumpstart your marketing efforts with this example based on Apple’s marketing pages.</p>
      <Link class="btn btn-outline-secondary" to={"/course"}>Add Cource</Link>
    </div>
    <div class="product-device shadow-sm d-none d-md-block"></div>
    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
  </div>
</main>
   )
}