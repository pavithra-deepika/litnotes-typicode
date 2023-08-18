import { Grid } from '@mui/material'
import React from 'react'
import User from './User'
function UserList({users}) {
  return (
    <Grid
    container
    spacing={2}

    direction="row"
    justify="flex-start"
    alignItems="flex-start"
>
        {users?.map(user =>
         <Grid item xs={12} sm={6} md={3} >
            <User user={user} key={user.id}/> 
            </Grid>)}  
     
    </Grid>
)}

export default UserList