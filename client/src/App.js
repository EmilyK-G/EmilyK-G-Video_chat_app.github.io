import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { ContextProvider } from './SocketContext';
// import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 100px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '600px',
    border: 'none',

    [theme.breakpoints.down('xs')]: {
      width: '90%',
    },
  },
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.wrapper}>
      <Router>
        <Navbar />
        <Route path="/" exact>
          <ContextProvider>
            <Home />
          </ContextProvider>
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
