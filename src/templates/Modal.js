import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import TwentyFourtyEight from './TwentyFourtyEight.js';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  Grid,
  Avatar,
  Box,
  Typography,
  Dialog,
  Badge,
  Card,
  CardContent,
  Button,
  Tooltip,
  FormControl
} from '@material-ui/core';

import AvatarGroup from '@material-ui/lab/AvatarGroup';

import avatar1 from '../templates/assets/images/avatars/avatar1.jpg';
import avatar2 from '../templates/assets/images/avatars/avatar2.jpg';
import avatar3 from '../templates/assets/images/avatars/avatar3.jpg';
import avatar4 from '../templates/assets/images/avatars/avatar4.jpg';
import avatar5 from '../templates/assets/images/avatars/avatar5.jpg';
import avatar6 from '../templates/assets/images/avatars/avatar6.jpg';
import avatar7 from '../templates/assets/images/avatars/avatar7.jpg';

import people2 from '../templates/assets/images/stock-photos/people-2.jpg';
import people3 from '../templates/assets/images/stock-photos/people-3.jpg';
import svgImage1 from '../templates/assets/images/illustrations/business_plan.svg';

import hero1 from '../templates/assets/images/hero-bg/hero-1.jpg';

import hero3 from '../templates/assets/images/hero-bg/hero-3.jpg';

import { Settings, Briefcase, Users, Layers } from 'react-feather';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      {...other}>
      {value === index && <Box p={4}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

const Modal = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(true);
  const [modal4, setModal4] = useState(false);
  const [modal5, setModal5] = useState(false);

  const toggle1 = () => setModal1(!modal1);
  const toggle2 = () => setModal2(!modal2);
  const toggle3 = () => setModal3(!modal3);
  const toggle4 = () => setModal4(!modal4);
  const toggle5 = () => setModal5(!modal5);

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [checked1, setChecked1] = React.useState(true);

  const handleChange1 = event => {
    setChecked1(event.target.checked);
  };
  return (
    <Fragment>
      <Dialog scroll="body" maxWidth="md" open={modal3} onClose={toggle3}>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={5}>
            <div className="p-4 text-center">
              <div className="avatar-icon-wrapper rounded-circle mx-auto">
                <div className="d-block p-0 avatar-icon-wrapper rounded-circle m-0 border-3 border-first">
                  <div className="rounded-circle border-3 border-white overflow-hidden">
                    <img alt="..." className="img-fluid" src={avatar5} />
                  </div>
                </div>
              </div>
              <h4 className="font-size-lg font-weight-bold my-2">
                Marion Devine
              </h4>
              <div className="text-center my-4">
                <span className="text-first mx-1 badge badge-neutral-first badge-pill">
                  Web developer
                </span>
                <span className="text-warning mx-1 badge badge-neutral-warning badge-pill">
                  Javascript
                </span>
                <span className="text-danger mx-1 badge badge-neutral-danger badge-pill">
                  Angular
                </span>
              </div>

              <p className="text-muted mb-4">
                I should be incapable of drawing a single stroke at the present
                moment; and yet I feel that I never was a greater artist than
                now.
              </p>

              <div className="divider my-4" />
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <span className="opacity-6 pb-2">Current month</span>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold font-size-lg">
                      <small className="opacity-6 pr-1">$</small>
                      46,362
                    </span>
                    <Badge color="secondary" className="ml-2 text-danger">
                      -8%
                    </Badge>
                  </div>
                </Grid>
                <Grid item xs={6}>
                  <span className="opacity-6 pb-2">Last year</span>
                  <div className="d-flex align-items-center justify-content-center">
                    <span className="font-weight-bold font-size-lg">
                      <small className="opacity-6 pr-1">$</small>
                      34,546
                    </span>
                    <Badge color="secondary" className="text-success ml-2">
                      +13%
                    </Badge>
                  </div>
                </Grid>
              </Grid>
              <div className="divider my-4" />
              <div className="font-weight-bold text-uppercase text-black-50 text-center mb-3">
                Team members
              </div>
              <AvatarGroup className="d-flex justify-content-center">
                <Avatar alt="..." src={avatar1} />
                <Avatar alt="..." src={avatar2} />
                <Avatar alt="..." src={avatar3} />
                <Avatar alt="..." src={avatar4} />
                <Tooltip title="Steven Yoh • Beck Simpson">
                  <Avatar>+2</Avatar>
                </Tooltip>
              </AvatarGroup>
              <div className="divider my-4" />
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className="mt-2">
                View complete profile
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} lg={7}>
            <div className="hero-wrapper bg-composed-wrapper h-100 rounded-right">
              <div className="flex-grow-1 w-100 d-flex align-items-end">
                <div
                  className="bg-composed-wrapper--image rounded-right opacity-9 bg-composed-filter-rm"
                  style={{ backgroundImage: 'url(' + people3 + ')' }}
                />
                <div className="bg-composed-wrapper--content text-center p-5">
                  <div className="text-white mt-3">
                    <h1 className="display-3 my-3 font-weight-bold">
                      Wonderful serenity has possession
                    </h1>
                    <TwentyFourtyEight />
                    <div className="divider border-1 mx-auto my-4 border-light opacity-2 rounded w-25" />
                    <div>
                      <Button color="primary" variant="contained" size="large">
                        <span className="btn-wrapper--icon">
                          <FontAwesomeIcon icon={['far', 'envelope']} />
                        </span>
                        <span className="btn-wrapper--label">Get in touch</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Dialog>

      
    </Fragment>
  );
};

export default Modal;
