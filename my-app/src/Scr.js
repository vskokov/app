import React, { useState, useEffect } from 'react';


import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
  withRouter
} from "react-router-dom";

import { HashRouter } from 'react-router-dom'

const ScrollToTop = ({ children, location: { pathname } }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return children || null;
};

export default withRouter(ScrollToTop);
