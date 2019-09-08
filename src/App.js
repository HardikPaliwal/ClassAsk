import React from 'react';
import logo from './logo.svg';
import {Home, Session} from './scenes';
import {Helmet} from 'react-helmet';
import './App.css';
import { Grid, Box, Markdown, Grommet } from "grommet";
import "./App.css";
import { grommet } from "grommet/themes";


function App() {
  return (
      <>
         <Box className="box">
             <Session/>
         </Box>
      </>

  );
}

export default App;
