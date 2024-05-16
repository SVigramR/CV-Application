import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WorkIcon from '@mui/icons-material/Work';

function ResumeHeader({ personDetails }) {
    return (
      <>
        <div className="resume-header flex">
        <h1>{personDetails.name}</h1>
        <div className="header-info">
          <div className='headerIcons'>
            <EmailIcon style={{ marginRight: '5px', verticalAlign: 'middle', padding: '0' }} />
            <p>{personDetails.email}</p>
          </div>
          <div className='headerIcons'>
            <LocalPhoneIcon style={{ marginRight: '5px', verticalAlign: 'middle', padding: '0' }} />
            <p>{personDetails.phone}</p>
          </div>
          <div className='headerIcons'>
          <WorkIcon style={{ marginRight: '5px', verticalAlign: 'middle', padding: '0' }} />
          <p>{personDetails.jobTitle}</p>
          </div>
        </div>
        </div>
      </>
    )
}

export default ResumeHeader;