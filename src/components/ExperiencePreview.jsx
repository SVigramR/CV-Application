function ExperiencePreview({ experienceData }) {
    return (
        <div className="educationPreview">
            <h1 className="educationHeader">Education</h1>
            <div className="educationContent">
                {experienceData.map(data => (
                    <div key={data.id}>
                        <h1>{data.company}</h1>
                        <p>{data.position}</p>
                        <p>{data.startDate}</p>
                        <p>{data.endDate}</p>
                        <p>{data.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExperiencePreview;