import AccordianTemplate from "../Common/AccordianUI";
import ListDetail from "../Common/ListUI";
import AddExperience from "./AddExperience";

function Experience({ experienceData, setExperienceData, currentMode, changeMode, type}) {
    
    return (
        <>
      <AccordianTemplate title={"Experience Details"}>
            {currentMode === 'show' ?
              (<ListDetail data={experienceData} updateData={setExperienceData} currentMode={currentMode} changeMode={changeMode} type={type}/>) :
              <AddExperience experience={experienceData} updateExperience={setExperienceData} changeMode={changeMode}/>
            }
      </AccordianTemplate>
        </>
    )
}

export default Experience;