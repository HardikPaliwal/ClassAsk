import React, { Component } from "react";
import "./component-styles/keyframes.css";
import { Form, FormField, Button, Box, Image, Anchor } from "grommet";

class ProfLoginForm extends Component {
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
      <Box fill pad="medium">
        <Box
          fill
          className="dropped-box"
          gridArea="greeter"
          gap="medium"
          flex
          border="left"
          basis="large"
          alignContent="center"
          a11yTitle="ClassAsk box for prof login"
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
          <Form align="center" pad="large">
            <FormField
              style={{ "text-align": "center" }}
              color="gray"
              name="name"
              label="Username"
              placeholder="ex. PennyApp99"
            />
          </Form>
          <Form align="center" pad="large">
            <FormField
              style={{ "text-align": "center" }}
              color="gray"
              name="name"
              label="Password"
              placeholder="********"
            />
            <FormField
              style={{ "text-align": "center" }}
              color="gray"
              name="name"
              label="Password"
              placeholder="********"
            />
            <FormField
              style={{ "text-align": "center" }}
              color="gray"
              name="name"
              label="Password"
              placeholder="********"
            />
            <Button pad="large" type="submit" primary color="#000000" label="Submit" />
          </Form>
          <Anchor href="#">Not a professor? Click here to enter a class code.</Anchor>
        </Box>
      </Box>
    );
  }
}

export default ProfLoginForm;
