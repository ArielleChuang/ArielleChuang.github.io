import { Box, Button, Link } from '@mui/material';
import React from 'react';
import { BrowserRouter as Routes, Switch, 
   Route, Redirect,} from "react-router-dom";
import OperationsAnalysis from './project/OperationsAnalysis';

function IconLink(props) {
   const {link, title, icon} = props;
   return (
      // <a href={link} target={"_blank"} rel="noopener noreferrer">
      // <Button onClick={}>
      //    <Routes>
      //       <Route exact path="/" component={OperationsAnalysis}/>
      //    </Routes>
      // </Button>
      // <a href={link}>
      //    <i className={icon}/> {title}
      // </a>
      <Link to="/portfolio/testing">link</Link>
   );
}

export default IconLink;