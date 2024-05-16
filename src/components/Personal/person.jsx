import { TextField } from "@mui/material"

function PersonalInfo({ person, changePerson }) {

    function handleNameChange(event) {
        changePerson(data => {data.name = event.target.value})
    }

    function handleEmailChange(event) {
        changePerson(data => {data.email = event.target.value})
    }

    function handlePhoneChange(event) {
        changePerson(data => {data.phone = event.target.value})
    }

    function handleJobTitleChange(event) {
        changePerson(data => {data.jobTitle = event.target.value})
    }


    return (
    <>
    <div className="personal-details">
        <h1>Personal Info</h1>
        <div className="personal-input">
        <TextField label="Name" variant="outlined" defaultValue={person.name} onChange={handleNameChange} fullWidth/>
        <TextField label="Email" variant="outlined" defaultValue={person.email} onChange={handleEmailChange} fullWidth/>
        <TextField label="Phone" variant="outlined" defaultValue={person.phone} onChange={handlePhoneChange} fullWidth/>
        <TextField label="Job Title" variant="outlined" defaultValue={person.jobTitle} onChange={handleJobTitleChange} fullWidth/>
        </div>
    </div>
    </>
    )
}

export default PersonalInfo