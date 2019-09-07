import React, { Component } from "react";
import { Form, FormField, Button, Grid, Box, Markdown } from "grommet";

class AppGrid extends Component {
  render() {
    return (
      <Grid
        align="center"
        a11yTitle="Application grid"
        alignContent="center"
        alignSelf="center"
        rows={["auto", "auto", "auto"]}
        columns={["auto"]}
        gap="auto"
        areas={[
          { name: "greeter", start: [0, 0], end: [0, 0] },
          { name: "main", start: [0, 1], end: [0, 1] },
          { name: "downloads", start: [0, 2], end: [0, 2] }
        ]}
        justify="center"
        justifyContent="center"
        margin="small"
      >
        <Box
          className="dropped-box"
          gridArea="greeter"
          gap="medium"
          flex
          border="left"
          basis="large"
          alignContent="center"
          a11yTitle="ClassAsk box for navigation"
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
          <Markdown className="markdown">
            ## "ClassAsk is *Piazza on steroids*"
          </Markdown>
          <Markdown className="markdown">
            ##### 
            *-- Smit R. (TA @ The University of Toronto, Mississauga)*
          </Markdown>
        </Box>
        <Box
          className="dropped-box"
          gridArea="main"
          gap="medium"
          flex
          border="left"
          basis="large"
          alignContent="center"
          a11yTitle="ClassAsk box for main contents"
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
          <Markdown className="markdown">
            ### We're building a platform where students can ask questions
            during lectures *without barriers* (**shyness, guilt**).
          </Markdown>
        </Box>
        <Box
          className="dropped-box"
          gridArea="downloads"
          border="left"
          basis="large"
          alignContent="center"
          a11yTitle="ClassAsk box for download buttons"
          alignSelf="center"
          elevation="medium"
          margin="medium"
          pad="medium"
          overflow="auto"
          animation="slideDown"
          responsive
          round="large"
          justify="center"
          align="center"
          background="#ffffffdd"
        >
          <Form pad="large">
            <FormField name="name" label="Class Code" />
            <Button type="submit" primary color="#000000" label="Submit" />
          </Form>
        </Box>
      </Grid>
    );
  }
}

export default AppGrid;
