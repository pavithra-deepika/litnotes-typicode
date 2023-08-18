import Link from 'next/link';
import Comments from '../components/Comments';
import { Button } from '@mui/material';
import { Grid } from '@mui/material'


function Comment() {
  return (
    <Grid>
        <h1 style={{marginLeft:"45%", color: "Blue"}}> Comments </h1>  
        < Comments/>
        <br></br>
        

        <Grid marginLeft={2}> 
                <Button  variant="contained" ><Link href="/"> Back to post list</Link></Button>
        </Grid>
    </Grid>
  )
}


export default Comment