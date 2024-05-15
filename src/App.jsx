import { useImmer } from 'use-immer';
import { useState } from 'react';
import './App.css';
import personal from './components/Personal/personal-data';
import PersonalInfo from './components/Personal/person';
import ResumeHeader from './components/PersonalPreview';
import educationSample from './components/Education/education_data';
import EducationPreview from './components/EducationPreview';
import Education from './components/Education/education';
import Experience from './components/Experience/Experience';
import experienceSample from './components/Experience/experience_data';
import ExperiencePreview from './components/ExperiencePreview';

function App() {
  const [personalData, setPersonalData] = useImmer({...personal})
  const [educationData, setEducationData] = useImmer(educationSample)
  const [experienceData, setExperienceData] = useImmer(experienceSample)
  const [show, setShow] = useState('show')
  const [showExp, setShowExp] = useState('show')

  return (
    <div className='root-sub'>
      <div className='userInput'>
        <PersonalInfo person={personalData} changePerson={setPersonalData} />
        <Education educationData={educationData} setEducationData={setEducationData} currentMode={show} changeMode={setShow} type={"edu"}/>
        <Experience experienceData={experienceData} setExperienceData={setExperienceData} currentMode={showExp} changeMode={setShowExp} type={"exp"}/>
      </div>
      <div className="resume">
        <ResumeHeader personDetails={personalData} />
        <EducationPreview educationData={educationData} />
        <ExperiencePreview experienceData={experienceData} />
      </div>
    </div>
  )
}

export {
  App
}