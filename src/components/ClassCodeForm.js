import React, { Component } from "react";
import "./component-styles/keyframes.css";
import { Form, FormField, Button, Box, Image, Anchor } from "grommet";

class ClassCodeForm extends Component {
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
          <Anchor href="#">Not a student? Click here for professors' login.</Anchor>
        </Box>
      </Box>
    );
  }
}

export default ClassCodeForm;
