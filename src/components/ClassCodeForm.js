import React, { Component } from "react";
import "./component-styles/keyframes.css";
import { Form, FormField, Button, Box, Image, Anchor, Text } from "grommet";
import Axios from "axios"
class ClassCodeForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginFlow: "student",
      bottomText: "Not a student? Click here for professors' login.",

      topText: "Instructor Sign In"
    };
  }
  submit(value, props){
    if(this.state.loginFlow === "student"){
      localStorage.setItem("Classroom Key", value.classCode);
      this.props.history.push('/student');
    } else if(this.state.loginFlow === "signUp"){
      Axios.post("http://localhost:2000/api/user", {"username": value.username, "password": value.password})
      .then(function(response){
        localStorage.setItem("username", value.username);
        localStorage.setItem("UUID", response.body);
        window.location.href = "/home"
      }).catch(function (error) {
        alert(error);
      });
    } else if(this.state.loginFlow === "signIn"){
      Axios.post("http://localhost:2000/api/user/Login", {"username": value.username, "password": value.password})
      .then(function(response){
        console.log(response);
        localStorage.setItem("username", value.username);
        localStorage.setItem("UUID", response);
        window.location.href = "/home"
      }).catch(function (error) {
        alert(error);
      });
    } 
    function handleSubmit(name){ Axios.post("/api/class", {"className": name, username: localStorage.getItem("username")}) .then(function(response){ console.log(response); }).catch(function (error) { console.log(error); }); }
  }
  onClickBottomText(state) {
    if (this.state.loginFlow == "student") {
      this.setState({
        loginFlow: "signIn",
        bottomText: "Don't have an account? Click here to sign up now!"
      });
    } else {
      if (this.state.loginFlow == "signIn")
        this.setState({
          loginFlow: "signUp",

          topText: "Instructor Sign Up",
          bottomText: "Sign in instead."
        });
      else
        this.setState({
          loginFlow: "signIn",

          topText: "Instructor Sign In",
          bottomText: "Don't have an account? Click here to sign up now!"
        });
    }
  }

  changeProfLogin() {
    this.setState({ login: !this.state.login });
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
          {this.state.loginFlow == "student" ? (
            <Form
              onSubmit={({ value }) => this.submit(value, this.props)}
              align="center"
              pad="large"
            >
              <FormField
                style={{ "text-align": "center" }}
                color="gray"
                name="classcode"
                required
                placeholder="ex. 123456"
                label="Class Code"
              />
              <Button type="submit" primary color="#6669B0" label="Submit" />
            </Form>
          ) : (
            ""
          )}

          {this.state.loginFlow == "signIn" ||
          this.state.loginFlow == "signUp" ? (
            <Box align="center" pad="large">
              <Text weight="bold" size="large">
                {this.state.topText}
              </Text>
              <Box pad="medium">
                <Form
                  align="center"
                  onSubmit={({ value }) => this.submit(value)}
                >
                  <FormField
                    style={{ "text-align": "center" }}
                    color="gray"
                    name="username"
                    placeholder="ex. Joe_1988"
                    label="Username"
                    required
                  />
                  <FormField
                    style={{ "text-align": "center" }}
                    color="gray"
                    name="password"
                    placeholder="******"
                    label="Password"
                    required
                  />
                  <Button
                    type="submit"
                    label="Submit"
                    primary={true}
                    color="#6669B0"
                  />
                </Form>
              </Box>
            </Box>
          ) : (
            " "
          )}
          <div onClick={this.onClickBottomText.bind(this)} href="#">
            <Anchor>{this.state.bottomText}</Anchor>
          </div>
        </Box>
      </Box>
    );
  }
}

export default ClassCodeForm;
