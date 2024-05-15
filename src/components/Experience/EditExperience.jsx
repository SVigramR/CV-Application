import { TextField, Button } from "@mui/material";
import { useImmer } from "use-immer";

function EditExperience({ experience, updateExperience, setEditMode, initialData}) {
    const [data, setData] = useImmer(initialData)

    function handleSave() {
        console.log(data,)
        if(JSON.stringify(initialData) === JSON.stringify(data)) {
            console.log("Nothing Edited")
            setEditMode(false)
        } else {
            updateExperience(
                experience.map((entry) => {
                    if (entry.id === initialData.id) {
                        return { ...data }
                    } else return entry
                })
            )
            setEditMode(false)
        }
    }

    function handleDelete() {
        updateExperience(experience.filter((entry) =>{
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
            <TextField label="Company" defaultValue={data.company} variant="outlined" onChange={(e) => handleChange(e, 'company')} />
            <TextField label="Position" defaultValue={data.position} variant="outlined" onChange={(e) => handleChange(e, 'position')} />
            <div className="duration">
                <TextField label="Start Date" defaultValue={data.startDate} variant="outlined" onChange={(e) => handleChange(e, 'startDate')} />
                <TextField label="End Date" defaultValue={data.endDate} variant="outlined" onChange={(e) => handleChange(e, 'endDate')} />
            </div>
            <TextField label="Description" defaultValue={data.description} variant="outlined" onChange={(e) => handleChange(e, 'description')} />
            <div className="editButton">
                <Button variant="outlined" onClick={handleDelete}>Delete</Button>
                <Button variant="outlined" onClick={handleCancel}>Cancel</Button>
                <Button variant="outlined" onClick={handleSave}>Save</Button>
            </div>
        </div>
    )
}

export default EditExperience;