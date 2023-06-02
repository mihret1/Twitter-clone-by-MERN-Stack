import React from "react";
import { Box } from "@mui/material";
import FollowingCard from "./FollowingCard";

const FollowingPost=()=>{
    const posts=[1,2,3,4,4,4,4,4,4]

    return(
        <Box>
 
          {
          posts.map((p)=>(
          <FollowingCard />
          ))
         }
           </Box>
    )
}

export default FollowingPost