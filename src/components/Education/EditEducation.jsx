import { TextField, Button } from "@mui/material";
import { useImmer } from "use-immer";
// import { v4 as uuidv4 } from "uuid";

function EditEducation({ education, updateEducation, setEditMode, initialData}) {
    const [data, setData] = useImmer(initialData)

    function handleSave() {
        console.log(data,)
        if(JSON.stringify(initialData) === JSON.stringify(data)) {
            console.log("Nothing Edited")
            setEditMode(false)
        } else {
            updateEducation(
                education.map((entry) => {
                    if (entry.id === initialData.id) {
                        return { ...data }
                    } else return entry
                })
            )
            setEditMode(false)
        }
    }

    function handleDelete() {
        updateEducation(education.filter((entry) =>{
            return entry !== initialData
        }))
        setEditMode(false)
    }

    function handleCancel() {
        setEditMode(false)
    }

    function handleChange(event, field) {
        const { value } = event.target;
        setData(prevState => ({
            ...prevState,
            [field]: value
        }));
    }

    return (
        <div className="edit-education-details">
            <TextField label="University" defaultValue={data.university} variant="outlined" onChange={(e) => handleChange(e, 'university')} />
            <TextField label="Course" defaultValue={data.course} variant="outlined" onChange={(e) => handleChange(e, 'course')} />
            <div className="duration">
                <TextField label="Start Date" defaultValue={data.startDate} variant="outlined" onChange={(e) => handleChange(e, 'startDate')} />
                <TextField label="End Date" defaultValue={data.endDate} variant="outlined" onChange={(e) => handleChange(e, 'endDate')} />
            </div>
            <TextField label="Location" defaultValue={data.location} variant="outlined" onChange={(e) => handleChange(e, 'location')} />
            <div className="editButton">
                <Button variant="outlined" onClick={handleDelete}>Delete</Button>
                <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                <Button variant="outlined" onClick={handleSave}>Save</Button>
            </div>
        </div>
    )
}

export default EditEducation;