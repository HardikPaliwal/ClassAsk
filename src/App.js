import React from "react";
import ClassCodeForm from "./components/ClassCodeForm";
import { Grommet } from "grommet";
import "./App.css";
import { grommet } from "grommet/themes";

function App() {
  return (
    <Grommet theme={grommet} full>
      <ClassCodeForm/>
    </Grommet>
  );
}

export default App;
