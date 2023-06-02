import React from "react";
import { Box, Button, Divider, Grid, Typography} from "@mui/material"
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import WhatHappeningPart from "./WhatHappeningPart";
import FollowingPost from "./FollowingPost";
import ForYouPost from "./ForYouPost";

export default function MiddleOne(){
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return(
         <Box bgcolor='yellow'>
           
               <Box className='upper' bgcolor='success'>
                  <Box sx={{ width: '100%', typography: 'body1' }}>
                     <TabContext value={value}>
                          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                             <strong style={{fontSize:'20px'}}>  Home</strong>
                            <TabList onChange={handleChange} >
                               <Tab label="Item One" value="1" sx={{marginLeft:'80px'}} />
                               <Tab label="Item Two" value="2" sx={{marginLeft:'180px'}} />
                           </TabList>
                         </Box>

                   <TabPanel value="1">
                       <Box>
                        <WhatHappeningPart />
                        <Button variant="outlined" fullWidth sx={{marginTop:'10px',marginBottom:'8px'}}> Show 35 Tweets</Button> 
                      </Box>
                       <Box>
                          <ForYouPost />
                       </Box>
                    </TabPanel>

                    <TabPanel value="2">
                      <Box>
                        <WhatHappeningPart />
                      </Box>
                     <Box>
                       <FollowingPost />
                     </Box>
                   </TabPanel>
               </TabContext>
           </Box>
                
       </Box>
  
           

             
          
    </Box>  
      )
}