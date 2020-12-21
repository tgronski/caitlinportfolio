import React from "react";
import { Route } from "react-router-dom";
import About from "./About";
import Article from "./Article"
import Nav from "./Nav";
import WritingSamples from "./WritingSamples";
import  "./App.css"

class App extends React.Component{
  renderMainRoutes() {
    return (
      <span>
        <Route exact path="/" component={About} />
        <Route exact path="/writingsamples" component={WritingSamples} />
        {["/writingsamples/:id"].map((path) => (
          <Route exact path={path} key={path} component={Article} />
        ))}
      </span>
    );
  }

  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <span>{this.renderMainRoutes()}</span>
        </main>
      </div>
    );
  }
}

export default App;