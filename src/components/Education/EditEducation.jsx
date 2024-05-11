import { TextField, Button } from "@mui/material";

function EditEducation() {
    return (
        <div className="education-details">
        <TextField label="University" variant="standard" />
        <TextField label="Course" variant="standard" />
        <div className="duration">
            <TextField label="Start Date" variant="standard" />
            <TextField label="End Date" variant="standard" />
        </div>
        <TextField label="Location" variant="standard" />
        <Button variant="Outlined">Save</Button>
        <Button variant="Filled">Cancel</Button>
        <Button variant="Filled">Delete</Button>
    </div>
    )
}

export default EditEducation;