import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/Main-Components.css';
import TwentyFourtyEight from './TwentyFourtyEight.js';

const useStyles = makeStyles({
  root: {
    width: 400,
    height: 400,
    marginTop: 200,
    marginBottom: 200,
    marginLeft: 15,
    marginRight: 15,
    borderRadius: 20,
  },
  media: {
    height: 300,
  },
  p: {
    fontSize: 1000,
  }
});

export default function Portflio(props) {
  const classes = useStyles();
  const projects = [{type: "Triply", img: "https://i.imgur.com/uJ0wYa0.gif",  component: "Photo Carousel", stack: "React, HTML/CSSS, Express, MySql"}, {type: "Coming Soon", img: "",  component: "Fullstack",  stack: "React, HTML/CSSS, Express, Mongo"}, {type: "Coming Soon", img: "",  component: "", stack: "React, HTML/CSSS, Express, MySql"}]
  return (
    <div className="main-portfolio">
      <div className="main-portfolio-title">
      </div>
      <div className="main-portfolio-projects">
        <span/>
      <span/>
      <span/>
    {projects.map((project, index) => (
      <div>
      <Card key={index} className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={project.img || null}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.type}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {project.component}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {project.stack}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="large" color="primary">
            Share
          </Button>
          <Button size="large" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
      </div>
      ))}
      <span/>
      <span/>
      <span/>

      </div>
      
    </div>
    )
}
