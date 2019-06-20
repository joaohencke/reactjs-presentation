import React from "react";

class App extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      counter: 0
    };

    this.increment = this.increment.bind(this);
  }
  increment() {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  }
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
