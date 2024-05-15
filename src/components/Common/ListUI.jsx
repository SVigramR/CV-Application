import { Button } from "@mui/material";
import { useState } from "react";
import EditEducation from "../Education/EditEducation";
import { useImmer } from "use-immer";

function ListDetail({ data, updateData, currentMode , changeMode}) {
    const [editMode, setEditMode] = useState(false)
    const [toBeEdited, setToBeEdited] = useImmer('')

    function showDetails() {
        if (currentMode === 'show') {
            changeMode('add')
        }
    }

    function updateEditMode(entry) {
        setEditMode(prevEditMode => !prevEditMode);
        setToBeEdited(entry)
    }

    if (!editMode) {
        return (
            <>
            <div className={"listContent"}>
            {data.map(data => (
                <div key={data.id} onClick={() => updateEditMode(data)}>
                    <h1>{data.university}</h1>
                    <p>{data.course}</p>
                </div>
            ))}
            </div>
            <div className="addEntry">
                <Button variant="outlined" onClick={showDetails}>Add Content</Button>
            </div>
            </>
        )
    } else {
        return (
            <EditEducation education={data} updateEducation={updateData} setEditMode={setEditMode} initialData={toBeEdited} />
        )
    }
}

export default ListDetail;