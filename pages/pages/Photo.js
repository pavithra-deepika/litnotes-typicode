import Photos from '../components/Photos';
import { Button } from '@mui/material';
import Link from 'next/link';
import { Grid } from '@mui/material'


function Photo() {
  return (
    <Grid>
        <h1 style={{marginLeft:"45%", color: "Blue"}}> Photos </h1> 
        < Photos/>
        <br></br>
        
        <Grid marginLeft={2}> 
        <Button  variant="contained" ><Link href="/"> Back to Album list</Link></Button>
        </Grid>
    </Grid>
  )
}


export default Photo