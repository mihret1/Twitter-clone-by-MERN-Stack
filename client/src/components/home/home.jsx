import React from "react"
import LeftSide from "../leftSide/leftside"
import RightSide from "../rightSide/rightside"
import MiddleOne from "../middleOne/middleone"
import { Box,Stack,Container, Grid } from "@mui/material"


export default function Home(){
    return(
     <Box>

        <Grid container>

            <Grid item lg={3}>
                <LeftSide  />
            </Grid>
            <Grid item lg={5}> 
                <MiddleOne />
            </Grid>
            <Grid item lg={4}>
               <RightSide />  
            </Grid>

        </Grid>
                
     </Box>

    )
}