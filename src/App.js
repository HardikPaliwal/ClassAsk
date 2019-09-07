import React from "react";
import { Grid, Box, Markdown, Grommet } from "grommet";
import "./App.css";
import { grommet } from "grommet/themes";

function App() {
  return (
    <Grommet theme={grommet} full>
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
            ## ClassAsk is *Piazza on steroids*
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
            ### We're building a platform where students can ask
            questions during lectures *without barriers* (**shyness, guilt**).
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
          background="#000000dd"
        >
          <Markdown className="markdown">
            #### Coming soon to the [App
            Store](https://www.apple.com/ca/ios/app-store/) and [Google
            Play](https://play.google.com/store).
          </Markdown>
        </Box>
      </Grid>
    </Grommet>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
