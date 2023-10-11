import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Grid } from '@mui/material'
 
    // const data=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${dataId.id}`) 

function Photos() {
  const router = useRouter();
  const dataId = router.query;
  
  const [photos, setPhotos] =  useState([])
  async function fetchPhoto() {
    const data=await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${dataId.id}`) 
    const todoData = await data.json();
    console.log(todoData)
    setPhotos(todoData)
  }
  useEffect(() => {

    fetchPhoto()
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
>


      {photos?.map((photo)=>
      <Grid item xs={12} sm={6} md={3} >
       <Card sx={{ minWidth: 275 , backgroundColor: "Lavender", maxHeight:400, ml:2}}>
       <CardContent>
       <Typography sx={{ fontSize: 14  , fontFamily: "sans-serif"}} color="black">
          Album id: {photo.albumId}   
       </Typography>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
         image :  {photo.url}  
       </Typography>
       {/* <Typography sx={{ fontSize: 14 }} color="text.secondary">
         Id:  {comment.id}  
       </Typography> */}
       </CardContent>
   </Card>
   </Grid>
)}
</Grid>
         </div>
           
  )
}

export default Photos
