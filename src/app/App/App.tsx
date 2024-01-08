import { useState } from "react";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <h1>Vite + React</h1>
      <div className="card">
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          {/* eslint-disable-next-line i18next/no-literal-string */}
          {/* eslint-disable-next-line i18next/no-literal-string */}
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      {/* eslint-disable-next-line i18next/no-literal-string */}
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
