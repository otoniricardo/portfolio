import React from 'react';
import { Route } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';

import './App.css';
import Home from './components';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

export default function App(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Route path="/" exact component={Home} />
      <Route path="/resume" component={Resume} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/contact" component={Contact} />
    </>
  );
}
