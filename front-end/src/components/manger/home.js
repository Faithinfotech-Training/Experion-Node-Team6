
import { ResourceEnquiryViewAdmin } from "../admin/resurceEnquiryDetails";
import { CourseEnquiryViewManger } from "./CourseEnquiryView";
import { CourseViewManger } from "./CourseView";
import { ResourceEnquiryViewManger } from "./ResourceEnquiryView";
import ViewResourcesManger from "./ResourceView";

export function HomeManger() {
    return(<>
   <h1>Manager App</h1>
   <ViewResourcesManger></ViewResourcesManger>
   <CourseViewManger />
   <CourseEnquiryViewManger/>
   <ResourceEnquiryViewManger/>
   
    </>)
}