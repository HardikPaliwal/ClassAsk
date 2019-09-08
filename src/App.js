import React from "react";
import ClassCodeForm from "./components/ClassCodeForm";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import Home from "./scenes/Home/Home"
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
    <Route path="/" exact component={land} />
    <Route path="/classroom" component={QuestionPage} />
   
  );
}

export default App;