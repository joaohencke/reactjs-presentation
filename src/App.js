import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  return (
    <section>
      <section className="header">
        <h3>Contador</h3>
      </section>
      <section className="content">Clicado {counter}x</section>
      <section className="action">
        <button type="button" onClick={increment}>
          Incrementar
        </button>
      </section>
    </section>
  );
}

export default App;
