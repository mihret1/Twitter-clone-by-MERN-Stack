import React from "react";
import { useState } from "react";
import { Box ,Button,Stack, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import useAutocomplete from '@mui/base/useAutocomplete';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';




import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ListSubheader from '@mui/material/ListSubheader';

const filter = createFilterOptions();

export default function RightSide(){
  const [value, setValue] = useState(null);
  const [open, toggleOpen] = useState(false)
  const [dialogValue, setDialogValue] = React.useState({
    title: '',
    year: '',
  });


  const handleClose = () => {
    setDialogValue({
      title: '',
      year: '',
    });
    toggleOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setValue({
      title: dialogValue.title,
      year: parseInt(dialogValue.year, 10),
    });
    handleClose();
  };


  return(
  <Box bgcolor='red' lg={3} pl={3}> 
       <Stack>
           <Box className='search'>search here



    <React.Fragment>
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            setTimeout(() => {
              toggleOpen(true);
              setDialogValue({
                title: newValue,
                year: '',
              });
            });
          } else if (newValue && newValue.inputValue) {
            toggleOpen(true);
            setDialogValue({
              title: newValue.inputValue,
              year: '',
            });
          } else {
            setValue(newValue);
          }
        }}
        filterOptions={(options, params) => {
          const filtered = filter(options, params);

          if (params.inputValue !== '') {
            filtered.push({
              inputValue: params.inputValue,
              title: `Add "${params.inputValue}"`,
            });
          }

          return filtered;
        }}
        id="free-solo-dialog-demo"
        options={top100Films}
        getOptionLabel={(option) => {
          // e.g value selected with enter, right from the input
          if (typeof option === 'string') {
            return option;
          }
          if (option.inputValue) {
            return option.inputValue;
          }
          return option.title;
        }}
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{ width: 300 }}
        freeSolo
        renderInput={(params) => <TextField {...params} label="" />}
      />
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubmit}>
          <DialogTitle>Add a new film</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Did you miss any film in our list? Please, add it!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={dialogValue.title}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  title: event.target.value,
                })
              }
              label="title"
              type="text"
              variant="standard"
            />
            <TextField
              margin="dense"
              id="name"
              value={dialogValue.year}
              onChange={(event) =>
                setDialogValue({
                  ...dialogValue,
                  year: event.target.value,
                })
              }
              label="year"
              type="number"
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
           </Box>
           <Box className='listone'> 

           <List>
           <ListItem disablePadding>
           
              <ListItemText primary={<Box>
                 <Typography variant="h5">Trends for You</Typography>

              </Box>} />
           
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
                <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
              <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem><ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
              <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
              <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
              <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
              <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
              <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText secondary="Jan 9, 2014" primary={<Box>
                 <Typography sx={{fontSize:'15px', fontWeight:'1px'}}> hello</Typography>
                 <Typography>its me girl</Typography>

              </Box>} />
              <ListItemIcon>
              <MoreHorizIcon />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>

            </Box>
           <Box>three</Box>
           <Box>four</Box>

       </Stack>
  </Box>
  )
}



const top100Films = [
  { title: 'The Shawshank Redemption', year: 1994 },
  { title: 'The Godfather', year: 1972 },
  { title: 'The Godfather: Part II', year: 1974 },
  { title: 'The Dark Knight', year: 2008 },
  { title: '12 Angry Men', year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: 'Pulp Fiction', year: 1994 },

  { title: 'City of God', year: 2002 },
  { title: 'Se7en', year: 1995 },
  { title: 'The Silence of the Lambs', year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: 'Life Is Beautiful', year: 1997 },
  { title: 'The Usual Suspects', year: 1995 },
  { title: 'Léon: The Professional', year: 1994 },
  { title: 'Spirited Away', year: 2001 },
  { title: 'Saving Private Ryan', year: 1998 },
  { title: 'Once Upon a Time in the West', year: 1968 },
  { title: 'American History X', year: 1998 },
  { title: 'Interstellar', year: 2014 },
  { title: 'Casablanca', year: 1942 },
  { title: 'City Lights', year: 1931 },
  { title: 'Psycho', year: 1960 },
  { title: 'The Green Mile', year: 1999 },
  { title: 'The Intouchables', year: 2011 },
  { title: 'Modern Times', year: 1936 },
  { title: 'Raiders of the Lost Ark', year: 1981 },
  { title: 'Rear Window', year: 1954 },
  { title: 'The Pianist', year: 2002 },
  { title: 'The Departed', year: 2006 },
  { title: 'Terminator 2: Judgment Day', year: 1991 },
  { title: 'Back to the Future', year: 1985 },
  { title: 'Whiplash', year: 2014 },
  { title: 'Gladiator', year: 2000 },
  { title: 'Memento', year: 2000 },
  { title: 'The Prestige', year: 2006 },
  { title: 'The Lion King', year: 1994 },
  { title: 'Apocalypse Now', year: 1979 },
  { title: 'Alien', year: 1979 },
  { title: 'Sunset Boulevard', year: 1950 },

]