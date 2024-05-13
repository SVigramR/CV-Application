import { useImmer } from 'use-immer';
import './App.css';
import personal from './components/Personal/personal-data';
import PersonalInfo from './components/Personal/person';
import ResumeHeader from './components/PersonalPreview';
import educationSample from './components/Education/education_data';
import EducationPreview from './components/EducationPreview';
import Education from './components/Education/education';
// import { useState } from 'react';

function App() {
  const [personalData, setPersonalData] = useImmer({...personal})
  const [educationData, setEducationData] = useImmer(educationSample)

  return (
    <div className='root-sub'>
      <div className='userInput'>
      <PersonalInfo person={personalData} changePerson={setPersonalData} />
      <Education educationData={educationData} setEducationData={setEducationData} />
    </div>
      <div className="resume">
        <ResumeHeader personDetails={personalData} />
        <EducationPreview educationData={educationData} />
      </div>
    </div>
  )
}

export {
  App
}