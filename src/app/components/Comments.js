"use client"
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Grid } from '@mui/material'
import { useRouter } from "next/navigation";

 
    // const data=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${dataId.id}`) 

function Todos() {
  const router = useRouter();
  const dataId = router.query;
  
  const [comments, setComments] =  useState([])
  async function fetchComment() {
    const data=await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${dataId.id}`) 
    const todoData = await data.json();
    console.log(todoData)
    setComments(todoData)
  }
  useEffect(() => {

    fetchComment()
  },[]
  )

  return (
    <div>
       <Grid
    container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
    minHeight={200}
>


      {comments?.map((comment)=>
      <Grid item xs={12} sm={6} md={3}  >
       <Card sx={{ minWidth: 275,  backgroundColor:"Gainsboro" }}>
       <CardContent>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Email: {comment.email}   
       </Typography>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
         Post Id:  {comment.postId}  
       </Typography>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
         Id:  {comment.id}  
       </Typography>
       </CardContent>
   </Card>
   </Grid>
)}
</Grid>
         </div>
           
  )
}

export default Todos
