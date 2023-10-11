import Link from "next/link";
import { Button } from "@mui/material";
import { Grid } from '@mui/material'


import Albums from "../components/Albums";
function Album() {
  return (
    <Grid>
      <h1 style={{marginLeft:"45%", color: "Blue"}}> Albums </h1>
      <Albums />
      <br></br>
      
      <Grid marginLeft={2}> 
        <Button variant="contained">
          <Link href="/"> Back to user list</Link>
        </Button>
      </Grid>
    </Grid>
  );
}

export default Album;
