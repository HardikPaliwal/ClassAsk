import React from "react";
import ClassCodeForm from "./components/ClassCodeForm";
import { Home, Session } from "./scenes";
import QuestionPage from "./components/QuestionPage";
import { BrowserRouter as Router, Route } from "react-router-dom";


function App() {
  return (
    <Router>
      <div>
        <Route path="/" exact component={ClassCodeForm} />
        <Route path="/student" component={QuestionPage} />
        <Route path="/classroom" component={Session} />
        <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
