import React from 'react'
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Navbar() {
  return (
    <AppBar
        position="fixed"
        sx={{backgroundColor:"whitesmoke"}}
        elevation={1}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Typography variant="h6" color="black" fontWeight="bold" noWrap component="div" >
            DocHub.ai
          </Typography>
        </Toolbar>
      </AppBar>
  )
}
