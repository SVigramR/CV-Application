import { Button } from "@mui/material";
import { useState } from "react";
import EditEducation from "../Education/EditEducation";

function ListDetail({ data, updateData, currentMode , changeMode}) {
    const [editMode, setEditMode] = useState(false)

    function showDetails() {
        if (currentMode === 'show') {
            changeMode('add')
        }
    }

    function updateEditMode() {
        setEditMode(prevEditMode => !prevEditMode);
    }

    if (!editMode) {
        return (
            <>
            <div className={"education"}>
            {data.map(data => (
                <div key={data.id} onClick={updateEditMode}>
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
            <EditEducation education={data} updateEducation={updateData} editMode={editMode} setEditMode={setEditMode}/>
        )
    }
}

export default ListDetail;