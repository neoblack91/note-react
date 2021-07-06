import React from "react";
import "./App.css";
// import Note from "./component/Note";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Note Taker
          </a>
        </nav>
        <div className="container">
          <div divstyle="margin-top: 80px;" className="jumbotron text-center">
            <h1 className="display-4">
              Note Taker{" "}
              <span role="img" aria-label="Memo">
                📝
              </span>
            </h1>
            <h4 className="mt-4">Take notes with Express</h4>
            <a
              className="btn btn-primary btn-lg mt-4"
              href="/notes"
              role="button"
            >
              Get Started
            </a>
          </div>
        </div>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="/assets/js/index.js"></script>
      </div>
    );
  }

  
}

export default App;
