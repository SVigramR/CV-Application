function ExperiencePreview({ experienceData }) {
    return (
        <div className="educationPreview">
            <h1 className="experienceHeader">Experience</h1>
            <div className="educationContent">
                {experienceData.map(data => (
                      <div key={data.id} className="center">
                      <div className="left">
                          <div className="durationPreview">
                              <p>{data.startDate}</p> -
                              <p>{data.endDate}</p>
                          </div>
                          <p>{data.position}</p>
                      </div>
                      <div className="expright">
                          <h1>{data.company}</h1>
                          <p>{data.description}</p>
                      </div>
                  </div>
                ))}
            </div>
        </div>
    )
}

export default ExperiencePreview;