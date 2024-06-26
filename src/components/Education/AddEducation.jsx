import { TextField, Button } from "@mui/material";
import { useImmer } from "use-immer";
import { v4 as uuidv4 } from "uuid";

function AddEducation({education, updateEducation, changeMode}) {
    const defaultObject = {
        "university": "",
        "course": "",
        "startDate": "",
        "endDate": "",
        "location": "",
    }
    const [educationInput, setEducationInput] = useImmer(defaultObject)

    function updateEducationData(event) {
        event.preventDefault()
        const newEducation = {
            ...educationInput,
            id: uuidv4() // Generate UUID
        };
        updateEducation([...education, newEducation])
        setEducationInput(defaultObject)
        console.log(education)
        changeMode('show')
    }

    function handleChange(event, field) {
        const { value } = event.target;
        setEducationInput(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    function handleMode() {
        changeMode('show')
    }

    return (
    <form className="education-details">
        <TextField label="University" value={educationInput.university} variant="outlined" onChange={(e) => handleChange(e, 'university')} fullWidth/>
        <TextField label="Course" value={educationInput.course} variant="outlined" onChange={(e) => handleChange(e, 'course')} fullWidth/>
        <div className="duration">
            <TextField label="Start Date" value={educationInput.startDate} variant="outlined" onChange={(e) => handleChange(e, 'startDate')} fullWidth/>
            <TextField label="End Date" value={educationInput.endDate} variant="outlined" onChange={(e) => handleChange(e, 'endDate')} fullWidth/>
        </div>
        <TextField label="Location" value={educationInput.location} variant="outlined" onChange={(e) => handleChange(e, 'location')} fullWidth/>
        <Button type="submit" variant="outlined" onClick={updateEducationData}>Add Education</Button>
        <Button variant="outlined" onClick={handleMode}>cancel</Button>
    </form>
    )
}

export default AddEducation;