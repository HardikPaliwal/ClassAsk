import React from "react";
import ClassCodeForm from "./components/ClassCodeForm";
import { Grommet } from "grommet";
import "./App.css";
import { grommet } from "grommet/themes";
import QuestionPage from "./components/QuestionPage";

function App() {
  return (
    <Grommet theme={grommet} full>

      <ClassCodeForm/>
    </Grommet>
  );
}

export default App;
