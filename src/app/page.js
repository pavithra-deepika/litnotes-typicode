"use client"
import react, { useEffect } from 'react'
import { useState } from 'react'
import UserList from './components/UserList'
import { Grid } from '@mui/material'
export default function Home() {
  const [users, SetUsers] = useState([])
    async function fetchUser() {
      const data=await fetch("https://jsonplaceholder.typicode.com/users");
      const userData = await data.json();
      // console.log(userData)
      SetUsers(userData)
    }
    
    useEffect(()=>{
      fetchUser()
    },[])

  return (
    <Grid 
    backgroundColor={"white"}
    > 
      <h1 style={{color: "Red", marginLeft:"40%"}}> JSON data</h1>

      <UserList users={users}/> 
    </Grid>
         
  )
}
