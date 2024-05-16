import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordianTemplate({ title, children }) {
    return (
      <div className='accordian'>
        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" >
          <h1>{title}</h1>
        </AccordionSummary>

        <AccordionDetails>
            {children}
        </AccordionDetails>
      </Accordion>
      </div>
    )
}

export default AccordianTemplate;