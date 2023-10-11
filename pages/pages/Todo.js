import { Button, Grid } from '@mui/material';
import Link from 'next/link';
import Todos from '../components/Todos';

function Todo() {
  return (
    <Grid>
        <h1 style={{marginLeft:"45%", color: "Blue"}}> Todo </h1>  
        <Todos />
        <br></br>
        <Grid   marginLeft={2}>

            <Button variant="contained"><Link href="/"> Back to user list</Link></Button>
        </Grid>
    </Grid>
  )
}


export default Todo