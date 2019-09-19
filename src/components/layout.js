
import '../App.css';

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal'
import EmployeeTab from './EmployeeTab';
import PostTab from './PostTab'
import EmployeeForm from './EmployeeForm';



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    'aria-controls': `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={event => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  headerTitle: {
    flexGrow: 1,
    textAlign: 'left'
  },
  button: {
    margin: theme.spacing(1),
    color: "#fff"
  }
}));

function Layout() {
  const classes = useStyles();
  const [value, setValue] = React.useState({
      page: 0,
      modalOpen: false,
  });

  function handleChange(event, newValue) {
    setValue({ ...value, page: newValue })
  }
  function handleOpen() {
    setValue({ ...value, modalOpen: true })
  }
  function handleClose() {
    setValue({ ...value, modalOpen: false })
  }

  function modalCloseCallback() {
    setValue({ ...value, modalOpen: false })
  }

  return (
    <div className="Layout">
      <AppBar>
          <Toolbar>
            <Typography className={classes.headerTitle} variant="h6">TASK ONE</Typography>
            {value.page === 1 ? <Button onClick={handleOpen} className={classes.button}>Add</Button> : <></>}
          </Toolbar>
        </AppBar>
        <div className="content">
        <TabPanel value={value.page} index={0}>
        <div className="AppTab">
            <PostTab></PostTab>
        </div>
      </TabPanel>
      <TabPanel value={value.page} index={1}>
        <div className="AppTab">
            <EmployeeTab></EmployeeTab>
        </div>
      </TabPanel>
      <div className="Navigation">
      <AppBar position="static">
        <Tabs
          variant="fullWidth"
          value={value.page}
          onChange={handleChange}
          aria-label="navigation"
        >
          <LinkTab label="Posts" href="/posts" {...a11yProps(0)} />
          <LinkTab label="Employees" href="/employees" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      </div>
        </div>
        <Modal open={value.modalOpen} onClose={handleClose}>
            <div className="EmployeeModal">
            <div className="EmployeeEdit">
                <EmployeeForm
                callback={modalCloseCallback} 
                index={"this.props.index"}
                role={"employee"}
                new={true}> 
                </EmployeeForm>
            </div>
            </div>
        </Modal>
    </div>
  );
}

export default Layout;
