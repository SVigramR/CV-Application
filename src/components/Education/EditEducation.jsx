import { TextField, Button } from "@mui/material";
import { useImmer } from "use-immer";
import { v4 as uuidv4 } from "uuid";

function EditEducation({ education, updateEducation, editMode, setEditMode }) {
    const [educationInput, setEducationInput] = useImmer(education)

    function handleSave() {
        const newEducation = { ...educationInput,
            id: uuidv4() // Generate UUID
        };
        updateEducation([ ...education, newEducation])
        console.log(education)
        if (editMode === true) setEditMode(false)
    }

    function handleDelete() {
        if (editMode === true) setEditMode(false)
    }

    function handleCancel() {
        if (editMode === true) setEditMode(false)
    }

    function handleChange(event, field) {
        const { value } = event.target;
        setEducationInput(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    return (
        <div className="edit-education-details">
            <TextField label="University" value={educationInput.university} variant="outlined" onChange={(e) => handleChange(e, 'university')} />
            <TextField label="Course" value={educationInput.course} variant="outlined" onChange={(e) => handleChange(e, 'course')} />
            <div className="duration">
                <TextField label="Start Date" value={educationInput.startDate} variant="outlined" onChange={(e) => handleChange(e, 'startDate')} />
                <TextField label="End Date" value={educationInput.endDate} variant="outlined" onChange={(e) => handleChange(e, 'endDate')} />
            </div>
            <TextField label="Location" value={educationInput.location} variant="outlined" onChange={(e) => handleChange(e, 'location')} />
            <div className="editButton">
                <Button variant="outlined" onClick={handleDelete}>Delete</Button>
                <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                <Button variant="outlined" onClick={handleSave}>Save</Button>
            </div>
        </div>
    )
}

export default EditEducation;