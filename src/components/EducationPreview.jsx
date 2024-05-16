function EducationPreview({ educationData }) {
    return (
        <div className="educationPreview">
            <h1 className="educationHeader">Education</h1>
            <div className="educationContent">
                {educationData.map(data => (
                    <div key={data.id} className="center">
                        <div className="left">
                            <div className="durationPreview">
                                <p>{data.startDate}</p> -
                                <p>{data.endDate}</p>
                            </div>
                            <p>{data.location}</p>
                        </div>
                        <div className="right">
                            <h1>{data.university}</h1>
                            <p>{data.course}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EducationPreview;
