import AccordianTemplate from "../Mui Components/AccordianUI";
import AddEducation from "./AddEducation";

function Education(educationData, setEducationData) {
    
    return (
        <>
      <AccordianTemplate title={"Education Details"}>
            <AddEducation education={educationData} updateEducation={setEducationData} />
      </AccordianTemplate>
        </>
    )
}

export default Education;