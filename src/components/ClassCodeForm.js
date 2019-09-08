import React, { Component } from "react";
import "./component-styles/keyframes.css";
import { Form, FormField, Button, Box, Image, Anchor } from "grommet";
import ProfLoginFrom from "./ProfLoginForm"
class ClassCodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFlow: "student",
      bottomText : "Not a student? Click here for professors' login",
      topText: "Sign Up",
    };
  }
  onClickBottomText(state) {
    if(this.state.loginFlow == "student"){
      this.setState({loginFlow: "signIn", bottomText: "Don't have an account? Click here to sign up now!"});
    } else{
      if(this.state.loginFlow == "signIn")
        this.setState({loginFlow: "signUp", topText:"Sign Up", bottomText:"Sign in instead"});
      else
        this.setState({loginFlow:  "signIn", topText: "Sign In", bottomText: "Don't have an account? Click here to sign up now!"});
    }
  }

  changeProfLogin() {
    this.setState({login: !this.state.login});
  }
  render() {
    return (
      <Box fill pad="medium">
        <Box
          fill
          className="shakey"
          gridArea="greeter"
          gap="medium"
          flex
          border="left"
          basis="large"
          alignContent="center"
          a11yTitle="ClassAsk box for class code"
          alignSelf="center"
          elevation="medium"
          wrap
          margin="medium"
          pad="small"
          overflow="auto"
          responsive
          round="medium"
          justify="center"
          align="center"
          background="#ffffffdd"
        >
          <Box height="small" width="medium">
            <Image fit="contain" src="ClassAsk.png" />
          </Box>
          {this.state.loginFlow == "student" ? 
          <Form align="center" pad="large">
            <FormField
              style={{ "text-align": "center" }}
              color="gray"
              name="name"
              placeholder="ex. 123456"
              label="Class Code"
            />
            <Button type="submit" primary color="#000000" label="Submit" />
            </Form>
                        : ""}

          {this.state.loginFlow == "signIn" ||this.state.loginFlow == "signUp"?
            <Form align="center" pad="large">
            <div>{this.state.topText}</div>
            <FormField
              style={{ "text-align": "center" }}
              color="gray"
              name="name"
              placeholder="ex. John Smith"
              label = "Username and Password"
            />
            <FormField
              style={{ "text-align": "center" }}
              color="gray"
              name="name"
              placeholder="ex. password"
            />
              <Button type="submit" primary color="#000000" label="Submit" />
              </Form>
            : " "}
          <div onClick={this.onClickBottomText.bind(this)}href="#">{this.state.bottomText}</div>
        </Box>
      </Box>
    );
  }
}

export default ClassCodeForm;
