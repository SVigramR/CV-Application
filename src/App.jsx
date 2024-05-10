import { useImmer } from 'use-immer';
import './App.css';
import personal from './components/personal-data';
import PersonalInfo from './components/person';

function App() {
  const [personalData, setPersonalData] = useImmer({...personal})

  return (
    <div className='root-sub'>
      <div className='userInput'>
      <PersonalInfo person={personalData} changePerson={setPersonalData} />
      </div>
      <div className="resume">
        <ResumeHeader personDetails={personalData} />
      </div>
    </div>
  )
}

function ResumeHeader({ personDetails }) {
  return (
    <>
      <div className="resume-header flex">
      <h1>{personDetails.name}</h1>
      <h2>{personDetails.email}</h2>
      <h2>{personDetails.phone}</h2>
      </div>
    </>
  )
}

export {
  App
}
