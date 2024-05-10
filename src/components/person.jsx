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


    return (
    <>
      <label>
        FullName:{' '}
      <input type="text" defaultValue={person.name} onChange={handleNameChange} />
      </label>
      <label>
        Email:{' '}
      <input type="email" defaultValue={person.email} onChange={handleEmailChange} />
      </label>
      <label>
        Phone:{' '}
      <input type="text" defaultValue={person.phone} onChange={handlePhoneChange} />
      </label>
    </>

    )
}

export default PersonalInfo