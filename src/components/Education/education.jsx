import AccordianTemplate from "../Common/AccordianUI";
import ListDetail from "../Common/ListUI";
import AddEducation from "./AddEducation";

function Education({ educationData, setEducationData, currentMode, changeMode, type}) {
    
    return (
        <>
      <AccordianTemplate title={"Education Details"}>
            {currentMode === 'show' ?
              (<ListDetail data={educationData} updateData={setEducationData} currentMode={currentMode} changeMode={changeMode} type={type}/>) :
              <AddEducation education={educationData} updateEducation={setEducationData} changeMode={changeMode}/>
            }
      </AccordianTemplate>
        </>
    )
}

export default Education;