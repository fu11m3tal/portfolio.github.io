import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/Portfolio.css';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    height: 300,
    margin: 0
  },
  media: {
    height: 140,
  },
});

export default function Portflio(props) {
  const classes = useStyles();
  const projects = [{type: "Triply", img: "https://i.imgur.com/uJ0wYa0.gif",  component: "Photo Carousel", stack: "React, HTML/CSSS, Express, MySql"}, {type: "Reviews", img: "",  component: "Fullstack",  stack: "React, HTML/CSSS, Express, Mongo"}, {type: "Fullstack", img: "",  component: "", stack: "React, HTML/CSSS, Express, MySql"}]
  return (
    <div className="portfolio">
    {projects.map((project, index) => (
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
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>))}
    </div>
    )
}
