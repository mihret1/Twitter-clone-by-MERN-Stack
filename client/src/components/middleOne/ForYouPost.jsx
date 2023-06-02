import React from "react";
import { Box } from "@mui/material";
import ForYouCard from "./ForYouCard";


const ForYouPost=()=>{
  const posts=[1,2,3,4,4,4,4,4,4,4,4,4,4,4,44,4]
    return(
       <Box>
        {
          posts.map((p)=>(
          <ForYouCard />
        ))
      }
      </Box>
    )
}

export default ForYouPost