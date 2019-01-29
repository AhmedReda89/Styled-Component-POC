import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Box = styled.div`
  width: 300px;
  height: auto;
  margin: 40px auto;
  padding: 20px;
  background: papayawhip;
  h1 {
    margin-top: 0;
    color: tomato;
  }
  h2 {
    font-weight: 200;
    font-size: 16px;
  }
`;

function App() {
  return (
    <Box>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </Box>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
