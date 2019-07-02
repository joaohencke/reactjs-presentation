import React from "react";

class App extends React.Component {
  state = {
    counter: 0
  };

  increment = () => this.setState(({ counter }) => ({ counter: counter + 1 }));

  render() {
    const { counter } = this.state;

    return (
      <section>
        <section className="header">
          <h3>Contador</h3>
        </section>
        <section className="content">Clicado {counter}x</section>
        <section className="action">
          <button type="button" onClick={this.increment}>
            Incrementar
          </button>
        </section>
      </section>
    );
  }
}

export default App;
