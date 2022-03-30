import "./home.css";
import {
  Button,
  Checkbox,
  FormControlLabel,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Avatar,
  CardContent,
  Divider,
  withStyles,
  CardActions,
  Grid,
} from "@mui/material";
import { Padding } from "@mui/icons-material";

export function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src="https://ichef.bbci.co.uk/images/ic/1200x675/p08j8hmv.jpg"
          className="App-logo"
          alt="logo"
        />
        Welcome to my personal website! My name is Toby Rudman.
      </header>
      <h1>More about Toby</h1>
      <p>
        Toby loves reading. She likes all genres besides horror. <br></br>Her
        favorite genre is historical fiction.<br></br> Her favorite color is
        purple. <br></br>Toby is in school for Management Information Systems{" "}
        <br></br>and is looking for an internship for the summer.
      </p>
      <h2>More about books</h2>
      <p>
        Books can give you an escape into another world.<br></br> It's a great
        hobby to have since you can read anytime and anywhere.<br></br>
        <a
          className="App-link"
          href="https://susannakearsley.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="contained">My favorite author</Button>
        </a>
      </p>

      <h3>Genres</h3>

      <Card>
        <Grid container>
          <Grid item xs={6}>
            <CardMedia
              alt="Romance"
              component="img"
              title="Romance"
              height="250"
              image="https://escapetoromance.com/wp-content/uploads/sites/172/2017/05/iStock-503130452.jpg"
            />
            <CardContent style={{ backgroundColor: "purple" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Romance
              </Typography>
            </CardContent>
          </Grid>

          <Grid item xs={6}>
            <CardMedia
              alt="Fantasy"
              component="img"
              title="Fantasy"
              height="250"
              image="https://i0.wp.com/timothyrjeveland.com/wp-content/uploads/2019/04/the-historic-origins-of-the-fantasy-genre-explained.jpg"
            />
            <CardContent
              style={{
                backgroundColor: "purple",
              }}
            >
              <Typography gutterBottom variant="h5" component="h2">
                Fantasy
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              alt="Romance"
              component="img"
              title="Romance"
              height="250"
              image="https://escapetoromance.com/wp-content/uploads/sites/172/2017/05/iStock-503130452.jpg"
            />
            <CardContent style={{ backgroundColor: "purple" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Romance
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={6}>
            <CardMedia
              alt="Horror"
              component="img"
              title="Horror"
              height="250"
              image="data:image/jpeg;base64,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"
            />
            <CardContent style={{ backgroundColor: "purple" }}>
              <Typography gutterBottom variant="h5" component="h2">
                Horror
              </Typography>
            </CardContent>
          </Grid>
        </Grid>
      </Card>

      <h4>Choose your favorite genres</h4>
      <p>
        <FormControlLabel control={<Checkbox />} label="Historical Fiction" />
        <FormControlLabel control={<Checkbox />} label="Fantasy" />
        <FormControlLabel control={<Checkbox />} label="SciFi" />
        <FormControlLabel control={<Checkbox />} label="Romance" />
        <FormControlLabel control={<Checkbox />} label="Action" />
      </p>
    </div>
  );
}

export default Home;
