import React from "react";
import { Box ,Stack,IconButton,Button, Divider} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import BrokenImageOutlinedIcon from '@mui/icons-material/BrokenImageOutlined';
import Input from '@mui/material/Input';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import BallotOutlinedIcon from '@mui/icons-material/BallotOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';






const WhatHappeningPart=()=>{
    return(
        <Box>
                <Stack direction='row' spacing={2}>
                   <Avatar sx={{ bgcolor: deepOrange[500] }}>M</Avatar>
                  <input type="text"  placeholder="What is happening guys?!"  style={{border:'none',outline:'none', fontWeight: 500,fontSize:17}}  />
                </Stack>

            <Stack direction='row' spacing={19} >
               <Stack direction='row' spacing={0.2} sx={{marginLeft:{lg:'48px'}}}>

                <IconButton>
                   <BrokenImageOutlinedIcon  color="primary" fontSize="small"/>  
                </IconButton>
                <IconButton>
                   <GifBoxOutlinedIcon  color="primary" fontSize="small"/>  
                </IconButton><IconButton>
                   <BallotOutlinedIcon color="primary" fontSize="small"/>  
                </IconButton><IconButton>
                   <SentimentSatisfiedAltOutlinedIcon  color="primary" fontSize="small"/>  
                </IconButton><IconButton>
                   <PendingActionsOutlinedIcon color="primary" fontSize="small"/>  
                </IconButton><IconButton>
                   <FmdGoodOutlinedIcon color="primary" fontSize="small"/>  
                </IconButton>
            </Stack>

                <Button variant='contained' sx={{marginLeft:{lg:'440px'}}}>Tweet</Button>

                </Stack>
                
        </Box>
        
    )
}


export default WhatHappeningPart