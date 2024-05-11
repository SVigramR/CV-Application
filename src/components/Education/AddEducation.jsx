import { TextField, Button } from "@mui/material";
import { useImmer } from "use-immer";
// import educationSample from "./education_data";
// import { useState } from "react";

function AddEducation({education, updateEducation}) {
    const [educationInput, setEducationInput] = useImmer({
        "id": "",
        "university": "",
        "course": "",
        "startDate": "",
        "endDate": "",
        "location": "",
    })

    let currentInput = educationInput

    function updateEducationData() {
        updateEducation([
            ...education, { ...currentInput}
        ])
        console.log(education)
    }

    function handleUniversity(event) {
        setEducationInput(data => {data.university = event.target.value})
    }

    function handleCourse(event) {
        setEducationInput(data => {data.course = event.target.value})
    }

    function handleStartDate(event) {
        setEducationInput(data => {data.startDate = event.target.value})
    }

    function handleEndDate(event) {
        setEducationInput(data => {data.endDate = event.target.value})
    }

    function handleLocation(event) {
        setEducationInput(data => {data.location = event.target.value})
    }

    return (
    <div className="education-details">
        <TextField label="University" variant="outlined" onChange={handleUniversity} />
        <TextField label="Course" variant="outlined" onChange={handleCourse} />
        <div className="duration">
            <TextField label="Start Date" variant="outlined" onChange={handleStartDate} />
            <TextField label="End Date" variant="outlined" onChange={handleEndDate} />
        </div>
        <TextField label="Location" variant="outlined" onChange={handleLocation} />
        <Button variant="outlined" onClick={updateEducationData}>Add Education</Button>
    </div>
    )
}

export default AddEducation;