import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Button from '@mui/material/Button';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import Link from '@mui/material/Link';
import { IconButton } from '@mui/material';
export const EmptyCardStore = () => {
  return (
    <div style={{display:'flex',width:'100%',justifyContent:'space-between'}} >
    <Box  sx={{width:'30%',height:'200px',display:'flex',bgcolor:'Window',justifyContent:'center',flexDirection:'column',alignItems:'center',borderWidth:'2px',borderRadius:'6px',borderStyle:'solid',borderColor:'#ffd600'}} >
   
      <IconButton>
        <ControlPointDuplicateIcon sx={{fontSize:'80px'}} />
      </IconButton>
    
    <Typography sx={{fontWeight:'500',mt:2,color:'#757575'}} variant='subtitle1' gutterBottom>
    Add Your first Offres à la une Product
</Typography>

   
 </Box>

 <Box  sx={{width:'30%',height:'200px',display:'flex',bgcolor:'Window',justifyContent:'center',flexDirection:'column',alignItems:'center',borderWidth:'2px',borderRadius:'6px',borderStyle:'solid',borderColor:'#ffd600'}} >
 <IconButton>
        <ControlPointDuplicateIcon sx={{fontSize:'80px'}} />
      </IconButton>
    
    <Typography sx={{fontWeight:'500',mt:2,color:'#757575'}} variant='subtitle1' gutterBottom>
    Add Your second Offres à la une Product
</Typography>

 </Box>


 <Box  sx={{width:'30%',height:'200px',display:'flex',bgcolor:'Window',justifyContent:'center',flexDirection:'column',alignItems:'center',borderWidth:'2px',borderRadius:'6px',borderStyle:'solid',borderColor:'#ffd600'}} >
 <IconButton>
        <ControlPointDuplicateIcon sx={{fontSize:'80px'}} />
      </IconButton>
    
    <Typography sx={{fontWeight:'500',mt:2,color:'#757575'}} variant='subtitle1' gutterBottom>
    Add Your third Offres à la une Product
</Typography>

 </Box>

 </div>
  )
}
