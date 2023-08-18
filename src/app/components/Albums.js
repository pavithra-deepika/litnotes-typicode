"use client"
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
// import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Grid } from '@mui/material';
import { CardActions} from '@mui/material';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from "next/navigation";




function Albums() {
  const router = useRouter();
  const dataId = router.query;
  
  const [albums, setAlbums] =  useState([])
  async function fetchAlbum() {
    const data=await fetch(`https://jsonplaceholder.typicode.com/albums?userId=${dataId.id}`) 
    const todoData = await data.json();
    setAlbums(todoData)
  }
  useEffect(() => {

    fetchAlbum()
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
    fontFamily={"sans-serif"}
>

      {albums?.map((album)=>
                  <Grid item xs={12} sm={6} md={3} >

       <Card sx={{ minWidth: 320, ml:2, maxHeight: 200, mr:2 , backgroundColor:"OldLace"}}>
       <CardContent>
       <Typography sx={{ fontSize: 14 }} color="black">
          User Id: {album.userId}  
       </Typography>
       <Typography sx={{ fontSize: 12 }} color="black">
          <h4> Tittle</h4>
          {album.title}   
       </Typography>
       <CardActions>
                <Link href={ { pathname: "/pages/Photo", query:{id:album.id}}}>
                  <Button  type="button"  size="medium" >Photos </Button>
                </Link>
        </CardActions>  
       </CardContent>
   </Card>
      </Grid>

)}
</Grid>
           
    </div>
  )
}

export default Albums
