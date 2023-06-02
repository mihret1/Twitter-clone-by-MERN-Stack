import React from "react";

import { Box ,Button,Typography} from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import BungalowRoundedIcon from '@mui/icons-material/BungalowRounded';
import TagRoundedIcon from '@mui/icons-material/TagRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import UnarchiveOutlinedIcon from '@mui/icons-material/UnarchiveOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import Avatar from '@mui/material/Avatar';
import ListItemAvatar from '@mui/material/ListItemAvatar';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export default function LeftSide(){
    return(
     <Box bgcolor='red'>
        <List>
        <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <PermIdentityOutlinedIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BungalowRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <TagRoundedIcon />
              </ListItemIcon>
              <ListItemText primary="Explore" />
            </ListItemButton>
          </ListItem> 
          
           <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <NotificationsOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Notification" />
            </ListItemButton>
          </ListItem> 
          
           <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <EmailOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Messages" />
            </ListItemButton>
          </ListItem>  
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Lists" />
            </ListItemButton>
          </ListItem>
          
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarkBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Bookmarks" />
            </ListItemButton>
          </ListItem> 
          
           <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <UnarchiveOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Twitter Blue" />
            </ListItemButton>
          </ListItem>
          
            <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermIdentityOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>  
          
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PendingOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="More" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton>
            <Button variant="contained" >
                 Tweet
            </Button>
            </ListItemButton>
          </ListItem>



    <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar  />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
        <ListItemButton>
        <ListItemIcon>
        <MoreHorizOutlinedIcon />

        </ListItemIcon>
        </ListItemButton>
       
      </ListItem>
      


        </List>

        </Box>
    )
}