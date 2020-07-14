import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
var tileData = [
   {
     img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
     title: 'Image',
     author: 'author',
   },
   {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'Image',
    author: 'author',
   },
  {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
    title: 'Image',
    author: 'author',
  },
  {
    img: 'https://material-ui.com/static/images/grid-list/morning.jpg',
    title: 'Image',
    author: 'author',
   },
   {
    img: 'https://material-ui.com/static/images/grid-list/vegetables.jpg',
    title: 'Image',
    author: 'author',
  },
 ];

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: 700,
    height: 500,
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    borderStyle: "solid",
    width: 700,
    height: 500,
  },
  gridListTile: {
    borderStyle: "dotted",
    backgroundColor: "orange",
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function TitlebarGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} className={classes.gridListTile}>
          <ListSubheader component="div">List Subheader</ListSubheader>
        </GridListTile>
        {tileData.map((tile, index) => (
          <GridListTile key={index}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
