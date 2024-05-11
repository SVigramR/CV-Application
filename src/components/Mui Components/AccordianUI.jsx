import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function AccordianTemplate(title, content) {
    return (
        <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" >
          <h1>{title}</h1>
        </AccordionSummary>
        <AccordionDetails>
            {content}
        </AccordionDetails>
      </Accordion>
    )
}

export default AccordianTemplate;