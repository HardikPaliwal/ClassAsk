import React, { Component } from "react";
import ClassCodeForm from "./components/ClassCodeForm";
import { Grommet } from "grommet";
import { grommet } from "grommet/themes";
import QuestionPage from "./components/QuestionPage";
import ProfLoginForm from "./components/ProfLoginForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfLogin: false,
    };
  }

  changeProfLogin() {
    this.setState({showProfLogin: !this.state.showProfLogin});
  }
  
  render() {
    return (
      <Grommet theme={grommet} full>
        {this.state.showProfLogin ? <ProfLoginForm /> : <ClassCodeForm />}:
      </Grommet>
    );
  }
}

export default App;
