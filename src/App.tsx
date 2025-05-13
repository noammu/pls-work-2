import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { DomTree } from "./components/dom-tree";
import { ReturnTextOnly } from "./components/return-text-only";
import { IHaveChildren } from "./components/i-have-children";
import { Compogedon } from "./components/compogedon";
import { TextEditing } from "./components/text-editing";
import { ReactBootstrap } from "./components/react-bootstrap";
import { PassiveSelectionStuff } from "./components/passive-selection-stuff";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ReturnTextOnly />
      <PassiveSelectionStuff />
      <Compogedon />
      <IHaveChildren>
        <h5>
          Look at me.
          <br /> I am the children now.
        </h5>
      </IHaveChildren>
      <ReactBootstrap />
      <TextEditing />
      <DomTree />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
