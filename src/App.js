import React from "react";
import AppGrid from "./components/AppGrid";
import { Grommet } from "grommet";
import "./App.css";
import { grommet } from "grommet/themes";
import QuestionPage from "./components/QuestionPage";

function App() {
  return (
    <Grommet theme={grommet} full>
      <QuestionPage/>
    </Grommet>
  );
}

export default App;
