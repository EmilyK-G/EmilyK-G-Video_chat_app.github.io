import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import { ContextProvider } from './SocketContext';

import Navbar from './components/Navbar/Navbar.jsx';
import Home from './components/Home/Home';
import About from './components/About/About';
import Footer from './components/Footer/Footer';


const App = () => {

  return (
    <div className="container">
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
