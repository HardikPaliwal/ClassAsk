import React from "react";
import AppGrid from "./components/AppGrid";
import { Grommet } from "grommet";
import "./App.css";
import { grommet } from "grommet/themes";

function App() {
  return (
    <Grommet theme={grommet} full>
      <AppGrid/>
    </Grommet>
  );
}

export default App;
