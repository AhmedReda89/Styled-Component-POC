import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

import "./styles.css";

const Box = styled.div`
  width: 350px;
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
        <h1>Created by a CodeSandbox</h1>
        <h2>
          Trying out{" "}
          <a href="https://www.styled-components.com/">styled component</a> for
          the first time!
        </h2>
        <p>
          Check{" "}
          <a href="https://www.youtube.com/watch?v=qu4U7lwZTRI">this talk</a> by
          Glen Maddern
        </p>
        <p>
          and{" "}
          <a href="https://www.youtube.com/watch?v=bIK2NwoK9xk">this talk</a>{" "}
          one by Max Stoiber
        </p>
      </div>
    </Box>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
