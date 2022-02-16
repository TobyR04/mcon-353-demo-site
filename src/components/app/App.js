import "./App.css";
import {
  Button, Checkbox, FormControlLabel, Card, CardActionArea, CardMedia, Typography, Avatar, CardContent,
  Divider, withStyles,CardActions,Grid
} from "@mui/material"; 
import { Padding } from "@mui/icons-material";
import { Home } from '../home/home'
import {Todo} from '../todo/todo'

function App() {
  return (
    <div>
       {/* <Home />  */}
        <Todo />  
    </div >
  )
}
export default App;