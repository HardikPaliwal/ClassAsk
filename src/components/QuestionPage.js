import React, { Component } from "react";
import StarRating from "react-star-rating";
import { Button, Box, Image, FormField, Markdown, Form, grommet } from "grommet";
import { Edit } from "grommet-icons";
import { Grommet, Text, Heading } from "grommet";

class QuestionPage extends Component {
  constructor(props){
    super(props);
    this.state={rating:0};
  }
  changeRating(newRating) {
    this.setState({
      rating: newRating
    });
  }
  render() {
    return (
      <Box
        height="100%"
        className="dropped-box"
        gridArea="greeter"
        gap="medium"
        flex
        border="left"
        basis="large"
        alignContent="center"
        a11yTitle="ClassAsk box for entering question"
        alignSelf="center"
        elevation="medium"
        wrap
        margin="medium"
        pad="large"
        overflow="auto"
        animation="slideDown"
        responsive
        round="large"
        justify="center"
        align="center"
        background="#ffffffdd"
      >
        <Form align="center" pad="large">
          <FormField name="name" label="Enter Question Here" />
          <Button icon={<Edit /> } label="Submit" onClick={() => {}} />
        </Form>

        <Text size={"30px"}>{`Do you understand the material?`}</Text>
       
         
      
      <Button label="Yes" onClick={() => {}}  />
      <Button label="No" onClick={() => {}}  />
      
      </Box>
      
    );
  }
}

export default QuestionPage;
