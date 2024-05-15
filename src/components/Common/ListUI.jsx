import { Button } from "@mui/material";
import { useState } from "react";
import EditEducation from "../Education/EditEducation";
import { useImmer } from "use-immer";
import EditExperience from "../Experience/EditExperience";

function ListDetail({ data, updateData, currentMode , changeMode, type}) {
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
        if (type === "edu") {
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
                <>
                <div className={"listContent"}>
                {data.map(data => (
                    <div key={data.id} onClick={() => updateEditMode(data)}>
                        <h1>{data.company}</h1>
                        <p>{data.position}</p>
                    </div>
                ))}
                </div>
                <div className="addEntry">
                    <Button variant="outlined" onClick={showDetails}>Add Content</Button>
                </div>
                </>
            )
        }

    } else {
        if (type === "edu") {
            return (
                <EditEducation education={data} updateEducation={updateData} setEditMode={setEditMode} initialData={toBeEdited} />
            )
        } else {
            return (
                <EditExperience experience={data} updateExperience={updateData} setEditMode={setEditMode} initialData={toBeEdited} />
            )
        }
    }
}

export default ListDetail;