import React, { Component } from "react";
import "./component-styles/keyframes.css";
import { Form, FormField, Button, Box, Image } from "grommet";

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
            <Image
              fit="contain"
              src="ClassAsk.png"
            />
          </Box>
          <Form pad="large">
            <FormField name="name" label="Class Code" />
            <Button type="submit" primary color="#000000" label="Submit" />
          </Form>
        </Box>
      </Box>
    );
  }
}

export default ClassCodeForm;
