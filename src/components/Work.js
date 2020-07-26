import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/Resume.css';
import { flexbox, border } from '@material-ui/system';
const useStyles = makeStyles({
  work: {
    position: "absolute",
    display: flexbox,
    justifyContent: "center",
    alignContent: "center",
    left: "40%",
    top: "-450px"
  },
  root: {
    width: 500,
    height: 450,
    margin: 25,
    padding: 30,
    border: "solid",
    borderRadius: 20
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 24,
  },
  pos: {
    marginBottom: 12,
  },
  imgTesla: {
    width: "14%",
    height: "14%"
  },
  imgCPUC: {
    width: "25%",
    height: "25%"
  }
});

export default function Work() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.work}>
      <h1>Work</h1>
      <Card className={classes.root}>
        <CardContent>
          <img className={classes.imgTesla} src="https://logo-logos.com/wp-content/uploads/2018/02/tesla-motors-logo.jpg"/>
          <Typography className={classes.title} color="textPrimary" varient="h1" gutterBottom>
            Tesla
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Business Analyst
          </Typography>
          <Typography variant="body2" component="p">
          -Conducted root cause analysis to identify liability and legal exposure for high escalation cases
          <br />
          <br />
          -Performed financial and operational analysis to drive strategic data-driven process improvement initiatives
          <br />
          <br />
          -Improved solar design process by creating energy analysis dashboard to help drive real-time forecasting
          <br />
          <br />
          -Led energy system analysis training seminars and served as a mentor and coach to junior analyst
          </Typography>
        </CardContent>
      </Card>

      <Card className={classes.root}>
        <CardContent>
          <img className={classes.imgCPUC} src="https://ww2.arb.ca.gov/sites/default/files/styles/list/public/images/PUC_logo.png?h=c6cbd989&itok=JRix6fsg" />
          <Typography className={classes.title} color="textPrimary" varient="h1" gutterBottom>
            California Public Utilities Commission
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            Business Analyst
          </Typography>
          <Typography variant="body2" component="p">
          -Performed statistical analysis to verify compliance on state mandated energy program for utility providers
          <br/>
          <br/>
          -Planned and mapped utility data for load distribution and system peaks to develop 
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
