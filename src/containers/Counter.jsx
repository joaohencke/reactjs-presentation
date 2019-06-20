import React, { useState, useEffect } from "react";
import { Header, GenericButton } from "../components";

function CounterContainer() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);

  useEffect(() => {
    console.log("counter renderizado");
    return () => {
      console.log("counter desmontado");
    };
  }, [counter]);

  useEffect(() => {
    console.log("componente renderizado");
    return () => {
      console.log("componente desmontado");
    };
  }, []);

  return (
    <section>
      <Header>Contador</Header>
      <section className="content">Clicado {counter}x</section>
      <section className="action">
        <GenericButton onClick={increment}>Incrementar</GenericButton>
      </section>
    </section>
  );
}

export default CounterContainer;
