import React, { Component } from "react";
import ClassCodeForm from "./components/ClassCodeForm";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import {Home, Session } from "./scenes"
import QuestionPage from "./components/QuestionPage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function land(){
  return ( 
  <Grommet theme={grommet} full>
    <ClassCodeForm/>
  </Grommet>
  )
}

function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={land} />
      <Route path="/student" component={QuestionPage} />
      <Route path="/classroom" component={Session} />
      <Route path="/Home" component={Home} />
    </div>
  </Router>
   
   
  );

}

export default App;
