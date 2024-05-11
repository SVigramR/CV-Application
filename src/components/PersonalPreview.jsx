function ResumeHeader({ personDetails }) {
    return (
      <>
        <div className="resume-header flex">
        <h1>{personDetails.name}</h1>
        <h2>{personDetails.email}</h2>
        <h2>{personDetails.phone}</h2>
        <h2>{personDetails.jobTitle}</h2>
        </div>
      </>
    )
}

export default ResumeHeader;