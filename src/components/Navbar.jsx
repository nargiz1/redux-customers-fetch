import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            NorthWind
          </Typography>
          <Button color="inherit"><Link to="/" style={{color:"white", textDecoration: "none"}}>Customers</Link></Button>
          <Button color="inherit"><Link to="/add" style={{color:"white", textDecoration: "none"}}>Add</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
