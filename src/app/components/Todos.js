
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { Button, Grid } from '@mui/material'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';




function Todos() {
  const router = useRouter();
  const dataId = router.query;
  const [todos, setTodos] =  useState([])
  const completedItem = []
  let inCompletedItem =[]
  const[changeTodo, setChangeTodo] = useState(true)
  
  async function fetchTodo() {
    const data=await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${dataId.id}`) 
    const todoData = await data.json();
    setTodos(todoData)
  }
  useEffect(() => {

    fetchTodo()
    todoComplete()
    // console.log(todos)
  },[]
  )
  
  const todoComplete = () => {
return setChangeTodo(!changeTodo);

  }
   
  return(
   <div>
     { todos?.map((item,id)=> {
      if(item.completed) {
        completedItem.push(item)
      } else {
        inCompletedItem.push(item)
      }  
      
// console.log('sss', completedItem);

})}
<div>
  {!changeTodo && 
  <div>
  

   {completedItem?.map((item) => 
   <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
   <ListItem>
    <ListItemText
          // {item.uesrId, item.completed? "true" : "false"} />
          primary={`UserId : ${item.userId}`} /> <br></br>
      <ListItemText
          secondary={`Status : ${item.completed? "true": "false"}`}  />
      <ListItemText 
                     secondary={`Title : ${item.title}`} />
   </ListItem>

   </List>
   )}
  </div>
  }

  { changeTodo && 
  <div>
    {inCompletedItem?.map((item) => 
     <List sx={{ width: '100%', maxWidth: 700, bgcolor: 'background.paper' }}>
     <ListItem>
      <ListItemText
            // {item.uesrId, item.completed? "true" : "false"} />
            primary={`UserId : ${item.userId}`} /> <br></br>
        <ListItemText
            secondary={`Status : ${item.completed? "true": "false"}`}  />
        <ListItemText 
                       secondary={`Title : ${item.title}`} />
     </ListItem>
  
     </List>
    )
    }
    </div>
    }
</div>
<Button onClick={todoComplete}> Todo </Button>
<div>
<Grid
    container
    spacing={2}
    direction="row"
    justify="flex-start"
    alignItems="flex-start"
>

      {todos?.map((todo)=>        
        <Grid item xs={12} sm={6} md={3} >
        <Card sx={{ minWidth: 275, ml:2, minHeight: 100 }}>
        <CardContent>
       <Typography sx={{ fontSize: 16 }} color="black" variant='h1'>
          User Id: {todo.userId}  
       </Typography>
       <Typography sx={{ fontSize: 16 }} color="black" variant='h1'>
           Title: {todo.completed ? 'true':'false'}   
       </Typography>
       </CardContent>
   </Card>
</Grid>
)}
</Grid>
</div>
   </div>

  )
}


export default Todos
