import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../css/Work.css';
import { flexbox, border } from '@material-ui/system';
const useStyles = makeStyles({
  work: {
    position: "relative",
    display: "flexbox",
    justifyContent: "center",
    alignContent: "center",
    flexDirection: "row"
  },
  root: {
    width: 500,
    height: 500,
    border: "solid",
    borderRadius: 10,
    padding: "0px",
    /* flex-direction: column; */
    
  },
  bullet: {
    // display: 'inline-block',
    margin: '0 0px',
    transform: 'scale(0.8)',
  },
  company: {
    fontSize: 20,
  },
  position: {
    fontSize: 18,
  },
  detail: {
    fontSize: 15,
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
    <div >

    </div>
    // <div className={classes.work}>
    //   <h1>Experiences</h1>
    //   <div className=
    //   <Card className={classes.root}>
    //     <CardContent>
    //       <img className={classes.imgTesla} src="https://logo-logos.com/wp-content/uploads/2018/02/tesla-motors-logo.jpg"/>
    //       <p className={classes.company}>
    //         Tesla
    //       </p>
    //       <p className={classes.position}>
    //         Business Analyst
    //       </p>
    //       <p className={classes.detail}>
    //       Conducted root cause analysis to identify liability and legal exposure for high escalation cases
    //       Performed financial and operational analysis to drive strategic data-driven process improvement initiatives

    //       Improved solar design process by creating energy analysis dashboard to help drive real-time forecasting
   
    //       Led energy system analysis training seminars and served as a mentor and coach to junior analyst
    //       </p>
    //     </CardContent>
    //   </Card>

    //   <Card className={classes.root}>
    //     <CardContent>
    //       <img className={classes.imgCPUC} src="https://ww2.arb.ca.gov/sites/default/files/styles/list/public/images/PUC_logo.png?h=c6cbd989&itok=JRix6fsg" />
    //       <p className={classes.company}>
    //         California Public Utilities Commission
    //       </p>
    //       <p className={classes.position}>
    //         Business Analyst
    //       </p>
    //       <p className={classes.detail}>
    //       Performed statistical analysis to verify compliance on state mandated energy program for utility providers
    //       Planned and mapped utility data for load distribution and system peaks reporting
    //       </p>
    //     </CardContent>
    //   </Card>
    // </div>
  );
}
