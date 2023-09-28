import axios from 'axios';
import  { useEffect, useState } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQs = () => {
  const [faq , setFaq] = useState([]);

  useEffect(()=>{
    (async()=>{
      const result = await axios.get("https://qtify-backend-labs.crio.do/faq");
      setFaq(result.data.data)
    })()
  })

  console.log(faq)
  return (
    <div className='bg-secondry' >
    <p className='text-3xl text-center text-white py-10'>FAQs</p>
    <div className='w-2/3 m-auto'> 
      {
       faq.map((item,index)=>{
        return(
          <Accordion key={index} sx={{backgroundColor:'#121212', color:'white', marginBottom:'20px' , borderTop:'1px solid white', borderRadius:"5%"}}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{color:'#34C94B'}} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item.question}</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{backgroundColor:'white', color:'black'}}>
              <Typography>{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        )})
      }
    </div>
  </div>
  )
}

export default FAQs