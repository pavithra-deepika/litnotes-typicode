import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { CardActions} from '@mui/material';
import { Button, Grid } from '@mui/material';
import Link from 'next/link';



function Posts() {
  const router = useRouter();
  const dataId = router.query;
  
  const [posts, setPosts] =  useState([])
  async function fetchPost() {
    const data=await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${dataId.id}`) 
    const postData = await data.json();
    setPosts(postData)
  }
  useEffect(() => {

    fetchPost()
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

      {posts?.map((post)=>
            <Grid item xs={12} sm={6} md={3} maxHeight={800} >

       <Card sx={{ minWidth: 250 , minHeight: 150, mr:1, ml:2, backgroundColor: "AntiqueWhite"}}>
       <CardContent>
       <Typography sx={{ fontSize: 14 }} color="black">
           User Id: {post.userId}   
       </Typography>
       <Typography sx={{ fontSize: 14 }} color="text.secondary">
          Title:  {post.title}  
       </Typography>
       </CardContent>
       <CardActions>
                <Link href={ { pathname: "/pages/Comment", query:{id:post.id}}}>
                  <Button type="button"  size="medium" >Comments </Button>
                </Link>
        </CardActions>       
   </Card>
   </Grid>

)}
           
         </Grid>
    </div>
  )
}


export default Posts
