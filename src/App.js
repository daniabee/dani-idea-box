import React from "react";
import "./App.css";
import Ideas from "./Ideas";
import Form from "./Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      ideas: [],
    };
  }

  addIdea = (newIdea) => {
    this.setState({ ideas: [...this.state.ideas, newIdea] });
  };

  deleteIdea = (id) => {
    console.log(id);
    const filterIdeas = this.state.ideas.filter((idea) => idea.id != id);
    this.setState({ ideas: filterIdeas });
  };

  render() {
    return (
      <main className="App">
        <h1>IdeaBox</h1>
        <Form addIdea={this.addIdea} />
        {!this.state.ideas.length && <h2>No ideas yet -- add some!</h2>}
        <Ideas ideas={this.state.ideas} deleteIdea={this.deleteIdea} />
      </main>
    );
  }
}

export default App;
