import React from "react";

class Note extends React.Component {
  render() {
    return (
      <div className="Note">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Note Taker
          </a>
          <div className="icons">
            <i className="fas fa-save text-light save-note"></i>
            <i className="fas fa-pen text-light new-note"></i>
          </div>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4 list-container">
              <div className="card">
                <ul className="list-group"></ul>
              </div>
            </div>
            <div className="col-8">
              <input
                className="note-title"
                placeholder="Note Title"
                maxlength="28"
                type="text"
              ></input>
              <textarea
                className="note-textarea"
                placeholder="Note Text"
              ></textarea>
            </div>
          </div>

          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
          <script src="/assets/js/index.js"></script>
        </div>
      </div>
    );
  }
}

export default Note;
