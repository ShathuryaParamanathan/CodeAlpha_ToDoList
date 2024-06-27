import { Typography } from '@mui/material'
import React from 'react'
import '../Styles/NavBar.css'

const NavBar = (props) => {
  return (
    <div>
        <div className='header'>
            <Typography variant='h2'>{props.title}</Typography>        
        </div>
    </div>
  )
}

export default NavBar