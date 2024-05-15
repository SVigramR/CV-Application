import { TextField, Button } from "@mui/material";
import { useImmer } from "use-immer";
import { v4 as uuidv4 } from "uuid";

function AddExperience({experience, updateExperience, changeMode}) {
    const defaultObject = {
        "company": "",
        "position": "",
        "startDate": "",
        "endDate": "",
        "description": "",
    }
    const [experienceInput, setExperienceInput] = useImmer(defaultObject)

    function updateEducationData(event) {
        event.preventDefault()
        const newExperience = {
            ...experienceInput,
            id: uuidv4() // Generate UUID
        };
        updateExperience([...experience, newExperience])
        setExperienceInput(defaultObject)
        console.log(experience)
        changeMode('show')
    }

    function handleChange(event, field) {
        const { value } = event.target;
        setExperienceInput(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    function handleMode() {
        changeMode('show')
    }

    return (
    <form className="education-details">
        <TextField label="Company" value={experienceInput.company} variant="outlined" onChange={(e) => handleChange(e, 'company')} />
        <TextField label="Position" value={experienceInput.position} variant="outlined" onChange={(e) => handleChange(e, 'position')} />
        <div className="duration">
            <TextField label="Start Date" value={experienceInput.startDate} variant="outlined" onChange={(e) => handleChange(e, 'startDate')} />
            <TextField label="End Date" value={experienceInput.endDate} variant="outlined" onChange={(e) => handleChange(e, 'endDate')} />
        </div>
        <TextField label="Description" value={experienceInput.description} variant="outlined" onChange={(e) => handleChange(e, 'description')} />
        <Button type="submit" variant="outlined" onClick={updateEducationData}>Add Experience</Button>
        <Button variant="outlined" onClick={handleMode}>cancel</Button>
    </form>
    )
}

export default AddExperience;