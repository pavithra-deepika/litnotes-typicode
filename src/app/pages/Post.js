import Link from 'next/link';
import Posts from '../components/Posts';
import { Button } from '@mui/material';
import { Grid } from '@mui/material'


function Post() {
  return (
    <Grid>

        <h1 style={{marginLeft:"45%", color: "Blue"}}> Posts </h1>  
        <Posts />
      <br></br>
      <Grid 
      marginLeft={2}>
       <Button  variant="contained"  ><Link href="/"> Back to user list</Link></Button>
    </Grid>
    </Grid>
  )
}


export default Post