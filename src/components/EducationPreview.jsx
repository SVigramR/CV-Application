function EducationPreview({ educationData }) {
    return (
        <div className="educationPreview">
            <h1 className="educationHeader">Education</h1>
            <div className="educationContent">
                {educationData.map(data => (
                    <div key={data.id}>
                        <h1>{data.university}</h1>
                        <p>{data.course}</p>
                        <p>{data.startDate}</p>
                        <p>{data.endDate}</p>
                        <p>{data.location}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationPreview;
