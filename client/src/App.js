import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { ContextProvider } from './SocketContext.jsx';
import './App.css';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home';
import Meetings from './components/Meetings/Meetings';
import Footer from './components/Footer/Footer';


const App = () => {

  return (
    <div className="container appContainer">
      <Router>
        <Navbar />
        <Route path="/" exact>
          <ContextProvider>
            <Home />
          </ContextProvider>
        </Route>
        <Route path="/your_meetings">
          <Meetings />
        </Route>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
