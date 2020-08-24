

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TwentyFourtyEight from '../components/TwentyFourtyEight.js';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    maxWidth: "100px",
    backgroundColor: "black",
    border: '2px solid #000',
    // boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const [header, setHeader] = React.useState("Arcade");
  const [status, setStatus] = React.useState("2048");
  const [loading, setLoading] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setStatus("2048")
    setHeader("Arcade")
  };

  const handleLoading = () => {
    var status = "Loading"
    setLoading(true);
    setStatus(status)
    setTimeout(() => {
      status = "Loading."
      setStatus(status)
    }, 1000)
    setTimeout(() => {
      status = "Loading.."
      setStatus(status)
    }, 2000)
    setTimeout(() => {
      status = "Loading..."
      setStatus(status)
    }, 3000)
    setTimeout(() => {
      setStatus("")
      setHeader("")
    }, 4000)
    setTimeout(() => {
      handleOpen()
    }, 5000)
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <SimpleModal />
    </div>
  );

  return (
    <div>
      <h6>{header}</h6>
      <span onClick={handleLoading}>{status}</span>
      <Modal
        className="modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <TwentyFourtyEight />
      </Modal>
    </div>
  );
}
